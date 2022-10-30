import classNames from "classnames";
import { PropsWithChildren } from "react";

export const H1 = ({
	children,
	className,
	...props
}: PropsWithChildren<JSX.IntrinsicElements["h1"]>): JSX.Element => (
	<h1
		{...props}
		className={classNames("text-2xl mt-4 font-bold text-indigo-400", className)}
	>
		{children}
	</h1>
);
