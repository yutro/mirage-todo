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

export const ListTasks = (): JSX.Element => {
	const { listId } = useParams();

	if (!listId) throw new Error("ListTasks: required listId is missing");

	const { data, error, isFetching } = useTodoListByIdQuery({ listId });

	if (isFetching) return <SectionPreloader />;

	if (error) return <div>error</div>;
	if (!data?.todoList?.todos.length) return <div>No data</div>;

	return (
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
	);
};
