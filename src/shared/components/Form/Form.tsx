import React, { FormEvent, ReactNode, RefObject } from "react";

import {
	DeepPartial,
	FieldValues,
	FormProvider,
	useForm,
	UseFormReturn,
} from "react-hook-form";
import { UseFormProps } from "react-hook-form/dist/types";

export type TFormProps<TFormValues extends FieldValues> = Omit<
	UseFormProps<TFormValues>,
	"defaultValues"
> & {
	stopPropagation?: boolean;
	defaultValues?: DeepPartial<TFormValues>;
	onSubmit: (
		formHandlers: UseFormReturn<TFormValues>,
		defaultValues: UseFormProps<TFormValues>["defaultValues"],
	) => (formValues: TFormValues) => void;
	children:
		| ReactNode
		| ((
				formHandlers: UseFormReturn<TFormValues>,
				defaultValues: UseFormProps<TFormValues>["defaultValues"],
		  ) => ReactNode);
	formTegProps?: Omit<JSX.IntrinsicElements["form"], "onSubmit">;
};

export const Form = <TFormValues extends FieldValues>({
	children,
	onSubmit,
	defaultValues,
	formTegProps,
	...useFormProps
}: TFormProps<TFormValues>): JSX.Element => {
	const formHandlers = useForm<TFormValues>({ ...useFormProps, defaultValues });
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
