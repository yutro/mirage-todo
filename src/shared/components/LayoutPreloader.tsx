import { Atom } from "./icons";
import { Layout } from "./Layout";

export const LayoutPreloader = (): JSX.Element => (
	<Layout className="flex justify-center items-center">
		<Atom classes={["h-10 animate-spin", "fill-current text-indigo-400"]} />
	</Layout>
);
