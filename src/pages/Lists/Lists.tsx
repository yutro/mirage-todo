import { H1, Header, Layout } from "../../shared/components";
import { AddToDoListForm } from "./AddToDoListForm";
import { TaskLists } from "./TaskLists";

export const Lists = (): JSX.Element => (
	<Layout className="flex flex-col">
		<Header>
			<H1>Task Lists</H1>
		</Header>
		<TaskLists />
		<AddToDoListForm />
	</Layout>
);
