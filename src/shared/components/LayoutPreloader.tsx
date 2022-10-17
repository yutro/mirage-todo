import classNames from "classnames";
import { StyledAtom } from "./SectionPreloader";
import { Layout, LayoutProps } from "./Layout";

type LayoutPreloaderProps = LayoutProps;

export const LayoutPreloader = ({
	className,
}: LayoutPreloaderProps): JSX.Element => (
	<Layout className={classNames("flex justify-center items-center", className)}>
		<StyledAtom />
	</Layout>
);
