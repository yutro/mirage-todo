import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTodoListsQuery } from "../../generated";
import { LayoutPreloader } from "../../shared/components";
import { routes } from "../../shared/const";

export const TaskLists = (): JSX.Element => {
	const { data, error, isFetching } = useTodoListsQuery();

	if (isFetching) return <LayoutPreloader />;

	if (error) return <div>error</div>;
	if (!data) return <div>No data</div>;

	return (
		<ul>
			{data.lists.map(({ id, title }, idx) => (
				<Link key={id} to={routes.lists.byId.absolute(id)}>
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
