export type TInputBaseProps<TDataType> = Readonly<
	Pick<JSX.IntrinsicElements["input"], "className" | "placeholder"> & {
		name: keyof TDataType;
	}
>;
