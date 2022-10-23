import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { useTodoListByIdQuery } from "../../../generated";
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

	const { data, error, isFetching } = useTodoListByIdQuery({ listId });

	if (error) return <div>error</div>;

	return (
		<Layout className="flex flex-col">
			<Header>
				<H1>{data?.todoList?.title ?? "Tasks"}</H1>
			</Header>

			{isFetching && <SectionPreloader />}
			{!isFetching && data?.todoList?.todos.length && (
				<ul>
					{data.todoList.todos.map(({ id, title }, idx) => (
						<Link key={id} to={routes.tasks.byId.absolute(id)}>
							<li
								className={classNames(
									"bg-gray-700 hover:bg-gray-800 rounded py-4 pr-3 text-white text-xs pl-4",
									{
										"mt-1": idx !== 0,
									},
								)}
							>
								{title}
							</li>
						</Link>
					))}
				</ul>
			)}
			<AddTaskForm />
		</Layout>
	);
};
