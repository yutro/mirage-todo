export const descendantRoute = <T extends string = string>(
	route: T,
): `${T}/*` => `${route}/*`;
