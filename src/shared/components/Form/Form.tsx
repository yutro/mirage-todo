import React, { FormEvent } from "react";

import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { FormProps } from "./Form.types";

export const Form = <FormValues extends FieldValues>({
	children,
	onSubmit,
	defaultValues,
	formTegProps,
	...useFormProps
}: FormProps<FormValues>): JSX.Element => {
	const formHandlers = useForm<FormValues>({ ...useFormProps, defaultValues });
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.stopPropagation();

		return formHandlers.handleSubmit(
			onSubmit({ ...formHandlers }, defaultValues),
		)(e);
	};

	return (
		<FormProvider {...formHandlers}>
			<form {...formTegProps} onSubmit={submitHandler}>
				{typeof children === "function"
					? children({ ...formHandlers }, defaultValues)
					: children}
			</form>
		</FormProvider>
	);
};
