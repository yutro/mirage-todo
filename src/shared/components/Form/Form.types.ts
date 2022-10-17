import { ReactNode } from "react";
import { DeepPartial, FieldValues, UseFormReturn } from "react-hook-form";
import { UseFormProps } from "react-hook-form/dist/types";

export type FormProps<FormValues extends FieldValues> = Omit<
	UseFormProps<FormValues>,
	"defaultValues"
> & {
	stopPropagation?: boolean;
	defaultValues?: DeepPartial<FormValues>;
	onSubmit: (
		formHandlers: UseFormReturn<FormValues>,
		defaultValues: UseFormProps<FormValues>["defaultValues"],
	) => (formValues: FormValues) => void;
	children:
		| ReactNode
		| ((
				formHandlers: UseFormReturn<FormValues>,
				defaultValues: UseFormProps<FormValues>["defaultValues"],
		  ) => ReactNode);
	formTegProps?: Omit<JSX.IntrinsicElements["form"], "onSubmit">;
};
