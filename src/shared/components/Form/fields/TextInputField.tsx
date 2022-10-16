import React from "react";
import {
	FieldError,
	FieldValues,
	useController,
	useFormContext,
} from "react-hook-form";
import { TInputBaseProps } from "./types";

type TTextInputFieldOwnProps<TDataType> = TInputBaseProps<TDataType>;

export type TTextInputFieldProps<TDataType> =
	TTextInputFieldOwnProps<TDataType>;

export const TextInputField = <TDataType,>({
	name,
	...props
}: TTextInputFieldProps<TDataType>): JSX.Element => {
	if (typeof name !== "string")
		throw new Error("TextInputField: name must be string");

	const { control } = useFormContext();
	const { field, fieldState } = useController<FieldValues>({
		control,
		name: name,
		defaultValue: "",
	});

	const fieldError = fieldState.error as unknown as FieldError | undefined;
	const { value, ...handlers } = field;

	return (
		<div>
			<input {...props} {...handlers} value={value} />
			{fieldError?.message && <span>{fieldError.message}</span>}
		</div>
	);
};
