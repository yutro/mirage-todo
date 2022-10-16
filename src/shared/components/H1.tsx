import { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren): JSX.Element => (
	<h1 className="text-2xl mt-4 font-bold text-indigo-400">{children}</h1>
);
