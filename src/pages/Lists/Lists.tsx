import { H1, Header, Layout } from "../../shared/components";
import { AddToDoListForm } from "./AddToDoListForm";
import { TaskLists } from "./TaskLists";

export const Lists = (): JSX.Element => (
	<Layout>
		<Header>
			<H1>Task Lists</H1>
		</Header>
		<TaskLists />
		<AddToDoListForm />
	</Layout>
);
