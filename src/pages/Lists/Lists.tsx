import classNames from "classnames";
import { Link } from "react-router-dom";

import { useTodoListsQuery } from "../../generated";
import {
	H1,
	Header,
	Layout,
	LayoutPreloader,
	Form,
	TextAreaField,
} from "../../shared/components";
import { routes } from "../../shared/const";

export const Lists = (): JSX.Element => {
	const { data, error, isFetching } = useTodoListsQuery();

	if (isFetching) return <LayoutPreloader />;

	if (error) return <div>error</div>;
	if (!data) return <div>No data</div>;

	return (
		<Layout>
			<Header>
				<H1>Task Lists</H1>
			</Header>
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
			<Form
				formTegProps={{ className: "mt-2" }}
				onSubmit={() => formValues => {
					console.log("-1-", formValues);
				}}
			>
				<div className="relative">
					<button className="material-symbols-outlined absolute top-5 left-2 text-indigo-400 p-1">
						<span>add_task</span>
					</button>
					<TextAreaField
						name="task"
						className="bg-gray-700 rounded mt-2 py-4 pr-3 pl-12 text-white w-full resize-y"
						placeholder="Add task"
						rows={1}
					/>
				</div>
			</Form>
		</Layout>
	);
};
