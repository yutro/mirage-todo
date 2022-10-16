import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTodoListsQuery } from "../../generated";
import { H1, Header, Layout, LayoutPreloader } from "../../shared/components";

const ListTasks = (): JSX.Element => {
	const { data, error, isFetching } = useTodoListsQuery();

	if (isFetching) return <LayoutPreloader />;

	if (error) return <div>error</div>;
	if (!data) return <div>No data</div>;

	return (
		<Layout>
			<Header>
				<H1>Tasks</H1>
			</Header>
			<ul>
				{data.lists.map(({ id, title }, idx) => (
					<li
						key={id}
						className={classNames(
							"bg-gray-700 rounded py-4 px-3 flex content-center",
							{
								"mt-1": idx !== 0,
							},
						)}
					>
						<button className="material-symbols-outlined">
							{completed ? "radio_button_checked" : "radio_button_unchecked"}
						</button>
						<Link to={`/task/${id}`} className="text-white text-xs ml-2">
							{title || content}
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};
