import { Response } from "miragejs";

export const createErrorResponse = (errors: ReadonlyArray<string>) => () =>
	new Response(
		500,
		{},
		{
			errors: errors,
		},
	);
