import { PropsWithChildren } from "react";
import { MenuButton } from "./MenuButton";

export const Header = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="mt-4 mb-5">
		<MenuButton />
		{children}
	</header>
);
