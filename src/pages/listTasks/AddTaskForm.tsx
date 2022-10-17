import { AddTodoMutationInput } from "../../generated";
import { Form, TextAreaField } from "../../shared/components";

export const AddTaskForm = (): JSX.Element => {
	return (
		<Form<AddTodoMutationInput>
			formTegProps={{ className: "mt-2" }}
			onSubmit={() => formValues => {}}
		>
			<div className="relative">
				<button className="material-symbols-outlined absolute top-5 left-2 text-indigo-400 p-1">
					<span>add_task</span>
				</button>
				<TextAreaField
					name="task"
					className="bg-gray-700 rounded mt-2 py-4 pr-3 pl-12 text-white w-full resize-y min-h-[56px]"
					placeholder="Add task"
					rows={1}
				/>
			</div>
		</Form>
	);
};
