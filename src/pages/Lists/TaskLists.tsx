import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTodoListsQuery } from "../../generated";
import { SectionPreloader } from "../../shared/components";
import { routes } from "../../shared/const";

export const TEXT_TaskLists = {
	error: "error while loading tasks lists",
	noData: "No data",
};

export const TaskLists = (): JSX.Element => {
	const { data, error, isFetching } = useTodoListsQuery();

	if (isFetching) return <SectionPreloader />;

	if (error) return <div>{TEXT_TaskLists.error}</div>;
	if (!data) return <div>{TEXT_TaskLists.noData}</div>;

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
