import classNames from "classnames";
import { PropsWithChildren } from "react";

export type LayoutOwnProps = {
	className?: string;
};

export type LayoutProps = PropsWithChildren<LayoutOwnProps>;

export const Layout = ({
	children,
	className,
}: PropsWithChildren<LayoutProps>): JSX.Element => (
	<div
		className={classNames(
			"pl-4 pr-5 bg-gray-900 min-h-screen flow-root",
			className,
		)}
	>
		{children}
	</div>
);
