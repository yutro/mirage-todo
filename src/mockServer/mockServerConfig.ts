import { createGraphQLHandler } from "@miragejs/graphql";
import { schema } from "../generated";
import { factories } from "./factories";
import { MockServerConfig } from "./mockServer.types";
import { resolvers } from "./resolvers";
import { seeds } from "./seeds";

export const mockServerConfig: MockServerConfig = {
	routes() {
		this.post(
			"/graphql",
			createGraphQLHandler(schema, this.schema, {
				context: undefined,
				root: undefined,
				resolvers,
			}),
		);
	},
	factories,
	seeds,
};
