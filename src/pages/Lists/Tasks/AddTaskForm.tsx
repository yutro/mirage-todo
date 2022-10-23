import { Navigate, useParams } from "react-router-dom";
import {
	AddTodoMutationInput,
	namedOperations,
	useAddToDoMutation,
} from "../../../generated";
import { AddForm, FormHandlers } from "../../../shared/components";
import { routes } from "../../../shared/const";
import { useAddTask } from "./useAddTask";

export const AddTaskForm = (): JSX.Element => {
	const { listId } = useParams();
	const addTodo = useAddTask();

	if (!listId) return <Navigate to={routes.lists.base.absolute()} />;

	return (
		<AddForm<Pick<AddTodoMutationInput, "title">>
			placeholder="Add task"
			onSubmit={addTodo}
		/>
	);
};
