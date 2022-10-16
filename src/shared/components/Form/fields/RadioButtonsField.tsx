import React from "react";
import {
	FieldError,
	Path,
	useController,
	useFormContext
} from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

import { TInputBaseProps } from "./types";

export type RadioButtonOption = Readonly<{
	label: string;
	disabled?: boolean;
}>;

type TRadioButtonFieldOwnProps = {
	config?: RegisterOptions;
	labelText?: string | JSX.Element;
	options: Array<RadioButtonOption>;
	defaultValue?: string | number;
};

type TRadioButtonFieldProps<TData> = TInputBaseProps<TData> &
	TRadioButtonFieldOwnProps;

export const RadioButtonsField = <TData,>({
	name,
	labelText,
	config,
	options,
	defaultValue
}: TRadioButtonFieldProps<TData>): JSX.Element => {
	if (typeof name !== "string")
		throw new Error("RadioButtonsField: name must be string");

	const { control } = useFormContext<TData>();
	const {
		field: { value, ...field },
		fieldState
	} = useController({
		name,
		control,
		...{ ...config, defaultValue: defaultValue as never }
	});

	const fieldError = fieldState.error as unknown as FieldError | undefined;

	return (
		<div>
			{typeof labelText === "string" ? (
				<LabelText className="mb-2.5">{labelText}</LabelText>
			) : (
				labelText
			)}

			<div className="relative mt-1 flex gap-4">
				{options.map((option, idx) => (
					<RadioButton
						key={option.label}
						{...(option.value === defaultValue && { defaultValue })}
						{...option}
						{...field}
						errorMessage={idx === 0 ? fieldError?.message : undefined}
						checked={option.value === value}
						error={Boolean(fieldError)}
						className="min-w-[124px]"
						classNames={{ content: "z-10" }}
						portal={document.body}
						disabled={config?.disabled}
					/>
				))}
			</div>
		</div>
	);
};
