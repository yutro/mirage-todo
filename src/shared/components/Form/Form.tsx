import React, { FormEvent, ReactNode } from "react";
import {
	DeepPartial,
	FormProvider,
	useForm,
	UseFormReturn
} from "react-hook-form";
import { UseFormProps } from "react-hook-form/dist/types";

export type TFormProps<TFormValues> = Omit<
	UseFormProps<TFormValues>,
	"defaultValues"
> & {
	stopPropagation?: boolean;
	defaultValues?: DeepPartial<TFormValues>;
	children:
		| ReactNode
		| ((formHandlers: UseFormReturn<TFormValues>) => ReactNode);
} & (
		| {
				onSubmit: (formValues: TFormValues) => void;
				curriedSubmit?: false;
		  }
		| {
				onSubmit: (
					formHandlers: UseFormReturn<TFormValues>,
					defaultValues?: UseFormProps<TFormValues>["defaultValues"]
				) => (formValues: TFormValues) => void;
				curriedSubmit: true;
		  }
	);

export const Form = <TFormValues,>({
	children,
	onSubmit,
	curriedSubmit,
	defaultValues,
	stopPropagation,
	...useFormProps
}: TFormProps<TFormValues>): JSX.Element => {
	const formHandlers = useForm<TFormValues>({ ...useFormProps, defaultValues });

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		if (stopPropagation) {
			e.stopPropagation();
		}

		return curriedSubmit
			? formHandlers.handleSubmit(onSubmit(formHandlers, defaultValues))(e)
			: formHandlers.handleSubmit(onSubmit)(e);
	};

	return (
		<FormProvider {...formHandlers}>
			<form onSubmit={submitHandler}>
				{typeof children === "function" ? children(formHandlers) : children}
			</form>
		</FormProvider>
	);
};
