import { createGraphQLHandler } from "@miragejs/graphql";
import { Server } from "miragejs";
import {schema} from "../generated";

export const mockServer = new Server({
	routes() {
		this.post("/graphql", createGraphQLHandler(schema, this.schema));
	}
})

// fast access in runtime for debugging
// @ts-expect-error //mockServer not exists on window
window.mockServer = mockServer
