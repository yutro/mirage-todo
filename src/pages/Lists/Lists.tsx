import classNames from "classnames";
import { Link } from "react-router-dom";

import { useTodoListsQuery } from "../../generated";
import { H1, Header, Layout, LayoutPreloader } from "../../shared/components";
import { Form } from "../../shared/components/Form";
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
									"mt-1": idx !== 0
								}
							)}
						>
							{title}
						</li>
					</Link>
				))}
			</ul>
			<Form<{ user: string }>
				defaultValues={{}}
				onSubmit={formValues => {
					console.log("-2-", formValues);
				}}
			>
				<input type="text" />
			</Form>

			<Form<{ user: string }>
				defaultValues={{}}
				onSubmit={() => formValues => {
					console.log("-form values-", formValues);
				}}
			>
				<input type="text" />
			</Form>

			<form
				className="mt-2"
				onSubmit={e => {
					e.preventDefault();

					console.log("-1-", e);
				}}
			>
				<input
					type="text"
					className="bg-gray-700 rounded mt-2 py-4 pr-3 pl-4 text-white w-full"
					placeholder="Add task"
				/>
			</form>
		</Layout>
	);
};
