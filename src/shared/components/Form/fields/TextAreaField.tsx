import React from "react";
import {
	FieldError,
	FieldValues,
	useController,
	useFormContext,
} from "react-hook-form";

import { TInputBaseProps } from "./types";

type TextAreaFieldOwnProps<TDataType> = TInputBaseProps<TDataType>;

export type TextAreaFieldProps<TDataType> = TextAreaFieldOwnProps<TDataType>;

export const TextAreaField = <TDataType,>({
	name,
	...props
}: TextAreaFieldProps<TDataType>): JSX.Element => {
	if (typeof name !== "string")
		throw new Error("TextAreaField: name must be string");

	const { control } = useFormContext();
	const { field, fieldState } = useController<FieldValues>({
		control,
		name: name,
		defaultValue: "",
	});

	const fieldError = fieldState.error as unknown as FieldError | undefined;

	return (
		<fieldset>
			<textarea {...props} {...field} />
			{fieldError?.message && <span>{fieldError.message}</span>}
		</fieldset>
	);
};
