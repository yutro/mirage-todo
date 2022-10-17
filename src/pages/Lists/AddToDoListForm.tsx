import { AddTodoListMutationInput } from "../../generated";
import { Form, TextAreaField } from "../../shared/components";
import { useAddTodoList } from "./useAddTodoList";

export const AddToDoListForm = (): JSX.Element => {
	const addTodoList = useAddTodoList();

	return (
		<Form<AddTodoListMutationInput>
			formTegProps={{ className: "mt-2" }}
			onSubmit={() => addTodoList}
		>
			<div className="relative">
				<button className="material-symbols-outlined absolute top-5 left-2 text-indigo-400 p-1">
					<span>add_circle</span>
				</button>
				<TextAreaField<AddTodoListMutationInput>
					name="title"
					className="bg-gray-700 rounded mt-2 py-4 pr-3 pl-12 text-white w-full resize-y min-h-[56px]"
					placeholder="Add list"
					rows={1}
				/>
			</div>
		</Form>
	);
};
