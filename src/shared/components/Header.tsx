import classNames from "classnames";
import { PropsWithChildren } from "react";
import { MenuButton } from "./MenuButton";

export const Header = ({
	children,
	className,
	...headerProps
}: PropsWithChildren<JSX.IntrinsicElements["header"]>): JSX.Element => (
	<header {...headerProps} className={classNames("mt-4 mb-5")}>
		<MenuButton />
		{children}
	</header>
);
