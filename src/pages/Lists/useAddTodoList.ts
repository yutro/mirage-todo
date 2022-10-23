import { useQueryClient } from "@tanstack/react-query";
import {
	AddTodoListMutationInput,
	namedOperations,
	useAddToDoListMutation,
} from "../../generated";
import { FormHandlers } from "../../shared/components";

export const useAddTodoList = () => {
	const queryClient = useQueryClient();
	const addToDoListMutation = useAddToDoListMutation();

	return ({ reset }: FormHandlers<AddTodoListMutationInput>) =>
		(formValues: AddTodoListMutationInput) => {
			addToDoListMutation.mutate(
				{ input: formValues },
				{
					onSuccess: () => {
						reset();
						return queryClient.invalidateQueries([
							namedOperations.Query.todoLists,
						]);
					},
				},
			);
		};
};
