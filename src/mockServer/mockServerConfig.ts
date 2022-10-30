import { createGraphQLHandler } from "@miragejs/graphql";
import { schema } from "../generated";
import { factories } from "./factories";
import { MockServerConfig } from "./mockServer.types";
import { resolvers } from "./resolvers";
import { seeds } from "./seeds";

export const MOCK_SERVER_HOST = "/graphql";

export const mockServerConfig: MockServerConfig = {
	routes() {
		this.post(
			MOCK_SERVER_HOST,
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
