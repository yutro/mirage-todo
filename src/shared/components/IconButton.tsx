import classNames from "classnames";
import React from "react";

type IconButtonProps = {
	iconName: string;
} & JSX.IntrinsicElements["button"];

export const iconButtonCommonStyle =
	"material-symbols-outlined text-indigo-400 hover:text-indigo-600";

export const IconButton = ({
	iconName,
	className,
	...props
}: IconButtonProps): JSX.Element => (
	<button {...props} className={classNames(iconButtonCommonStyle, className)}>
		{iconName}
	</button>
);
