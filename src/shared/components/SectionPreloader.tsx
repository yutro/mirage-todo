import { Atom, AtomProps } from "./icons";

export const StyledAtom = ({ ...props }: AtomProps) => (
	<Atom
		{...props}
		classes={["h-10 animate-spin", "fill-current text-indigo-400"]}
	/>
);

export const TEXT_SectionPreloader = {
	title: "sectionPreloader",
};

export const SectionPreloader = (): JSX.Element => (
	<div
		className="flex flex-grow justify-center items-center"
		title={TEXT_SectionPreloader.title}
	>
		<StyledAtom />
	</div>
);
