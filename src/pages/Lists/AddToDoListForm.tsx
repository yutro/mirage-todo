import { AddForm } from "../../shared/components";
import { useAddTodoList } from "./useAddTodoList";

export const AddToDoListForm = (): JSX.Element => (
	<AddForm onSubmit={useAddTodoList()} placeholder="Add new list" />
);
