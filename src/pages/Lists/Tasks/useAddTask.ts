import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
	AddTodoMutationInput,
	namedOperations,
	useAddToDoMutation,
} from "../../../generated";
import { FormHandlers } from "../../../shared/components";

type AddTaskFormValues = Pick<AddTodoMutationInput, "title">;

export const useAddTask = () => {
	const { listId } = useParams();
	const addToDoMutation = useAddToDoMutation();
	const queryClient = useQueryClient();

	return ({ reset }: FormHandlers<AddTaskFormValues>) =>
		({ title }: AddTaskFormValues) => {
			addToDoMutation.mutate(
				{ input: { title, todoListId: listId } },
				{
					onSuccess: () => {
						reset();
						return queryClient.invalidateQueries([
							namedOperations.Query.todoListById,
							{ listId },
						]);
					},
				},
			);
		};
};
