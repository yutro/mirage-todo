import { createGraphQLHandler } from "@miragejs/graphql";
import { Server, Model } from "miragejs";
import {schema} from "../generated";

export const createMockServer = async () => {
	const mockServer =  new Server({
		routes() {
			this.post("/graphql", createGraphQLHandler(schema, this.schema));
		},
		models: {
			todo: Model
		},
		seeds(server) {
			server.createList("todo", 2, {content: 'some todo'});
		},
	});

	// fast access in runtime for debugging
	// @ts-expect-error //mockServer not exists on window
	window.mockServer = mockServer

	return mockServer
}
