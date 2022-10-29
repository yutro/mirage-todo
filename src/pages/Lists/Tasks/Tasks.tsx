import { useQueryClient } from "@tanstack/react-query";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import {
	namedOperations,
	useDeleteToDoListMutation,
	useDeleteToDoMutation,
	useTodoListByIdQuery,
} from "../../../generated";
import {
	H1,
	Header,
	Layout,
	LayoutPreloader,
	SectionPreloader,
} from "../../../shared/components";
import { routes } from "../../../shared/const";
import { AddTaskForm } from "./AddTaskForm";

export const Tasks = (): JSX.Element => {
	const { listId } = useParams();

	if (!listId) throw new Error("Tasks: required listId is missing");

	const queryClient = useQueryClient();

	const { data, error, isFetching, refetch } = useTodoListByIdQuery({ listId });
	const { mutate: deleteToDoListById } = useDeleteToDoListMutation();
	const { mutate: deleteToDoById } = useDeleteToDoMutation({
		onSuccess: () => refetch(),
	});

	if (error) return <div>error</div>;

	return (
		<Layout className="flex flex-col">
			<Header className="">
				<H1>{data?.todoList?.title ?? "Tasks"}</H1>
				<button
					className="material-symbols-outlined absolute right-4 top-3"
					onClick={() => deleteToDoListById({ id: listId })}
				>
					delete
				</button>
			</Header>

			{isFetching && <SectionPreloader />}
			{!isFetching && data?.todoList?.todos.length && (
				<ul>
					{data.todoList.todos.map(({ id, title }, idx) => (
						<Link key={id} to={routes.tasks.byId.absolute(id)}>
							<li
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
									onClick={e => {
										e.preventDefault();
										deleteToDoById({ id });
									}}
								>
									delete
								</button>
							</li>
						</Link>
					))}
				</ul>
			)}
			<AddTaskForm />
		</Layout>
	);
};
