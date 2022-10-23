import classNames from "classnames";
import { FieldValues } from "react-hook-form";
import { AddTodoListMutationInput } from "../../generated";
import { FormProps, Form, TextAreaField } from "./Form";

type AddFormProps<FormValues extends FieldValues> = Pick<
	FormProps<FormValues>,
	"onSubmit"
> & {
	placeholder: string;
};

export const AddForm = <FormValues extends FieldValues>({
	placeholder,
	...formProps
}: AddFormProps<FormValues>): JSX.Element => (
	<Form<FormValues> formTegProps={{ className: "mt-auto mb-2" }} {...formProps}>
		{({ formState: { isSubmitting, isDirty, isValid } }) => {
			const isDisabled = isSubmitting || !isDirty || !isValid;
			return (
				<div className="relative">
					<button
						disabled={isDisabled}
						className={classNames(
							"material-symbols-outlined absolute top-5 left-2 text-indigo-400 p-1",
							{
								"override:(text-indigo-100 text-opacity-10) cursor-default":
									isDisabled,
							},
						)}
						title={isDisabled ? undefined : "Add task"}
					>
						add_circle
					</button>
					<TextAreaField<AddTodoListMutationInput>
						name="title"
						className="bg-gray-700 rounded mt-2 py-4 pr-3 pl-12 text-white w-full resize-y min-h-[56px]"
						placeholder={placeholder}
						rows={1}
					/>
				</div>
			);
		}}
	</Form>
);
