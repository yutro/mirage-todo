import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
	AddTodoListMutationInput,
	namedOperations,
	useAddToDoListMutation,
} from "../../generated";

export const useAddTodoList = () => {
	const { reset } = useForm();
	const queryClient = useQueryClient();
	const addToDoListMutation = useAddToDoListMutation();

	return (formValues: AddTodoListMutationInput) => {
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
