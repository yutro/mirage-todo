import classNames from "classnames";
import { Link, useNavigate, useParams } from "react-router-dom";
import { capitalize } from "lodash/fp";
import {
	useDeleteToDoListMutation,
	useDeleteToDoMutation,
	useTodoListByIdQuery,
} from "generated";
import {
	H1,
	Header,
	IconButton,
	iconButtonCommonStyle,
	Layout,
	SectionPreloader,
} from "shared/components";
import { routes } from "shared/const";
import { AddTaskForm } from "./AddTaskForm";

export const Tasks = (): JSX.Element => {
	const { listId } = useParams();

	const navigate = useNavigate();

	if (!listId) throw new Error("Tasks: required listId is missing");

	const { data, error, isFetching, refetch } = useTodoListByIdQuery({ listId });
	const { mutate: deleteToDoListById } = useDeleteToDoListMutation({
		onSuccess: () => navigate(routes.lists.base.absolute()),
	});
	const { mutate: deleteToDoById } = useDeleteToDoMutation({
		onSuccess: () => refetch(),
	});

	if (error) return <div>error</div>;

	const listTitle = capitalize(data?.todoList?.title ?? "Loading Tasks...");

	return (
		<Layout className="flex flex-col">
			<Header>
				<Link
					to={routes.lists.base.absolute()}
					className={iconButtonCommonStyle}
				>
					arrow_back
				</Link>
				<div className="flex items-center justify-between mt-2">
					<H1 className="override:(mt-0)">{listTitle}</H1>
					<IconButton
						iconName="delete"
						className=""
						title={`delete ${listTitle}`}
						onClick={() => deleteToDoListById({ id: listId })}
					/>
				</div>
			</Header>

			{isFetching && <SectionPreloader />}
			{!isFetching && data?.todoList?.todos.length && (
				<ul>
					{data.todoList.todos.map(({ id, title }, idx) => (
						<li
							key={id}
							className={classNames(
								"bg-gray-700 rounded py-4 pr-3 text-white text-xs pl-4 relative",
								{
									"mt-1": idx !== 0,
								},
							)}
						>
							{title}
							<button
								className="material-symbols-outlined absolute right-4 top-3"
								title={`delete task: ${title}`}
								onClick={e => {
									e.preventDefault();
									deleteToDoById({ id });
								}}
							>
								delete
							</button>
						</li>
					))}
				</ul>
			)}
			<AddTaskForm />
		</Layout>
	);
};
