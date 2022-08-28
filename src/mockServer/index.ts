import { createGraphQLHandler } from "@miragejs/graphql";
import { Server } from "miragejs";
import { graphQLSchema } from "../schema";

export const mockServer = new Server({
	routes() {
		this.post("/graphql", createGraphQLHandler(graphQLSchema, this.schema));
	}
})

// fast access in runtime for debugging
// @ts-expect-error //mockServer not exists on window
window.mockServer = mockServer
