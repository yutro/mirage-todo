import { Atom } from "./icons";

export const StyledAtom = () => (
	<Atom classes={["h-10 animate-spin", "fill-current text-indigo-400"]} />
);

export const SectionPreloader = (): JSX.Element => (
	<div className="flex flex-grow justify-center items-center">
		<StyledAtom />
	</div>
);
