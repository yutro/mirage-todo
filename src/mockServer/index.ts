import { createGraphQLHandler } from "@miragejs/graphql";
import {Server, Model, hasMany, belongsTo, Factory} from "miragejs";
import {schema} from "../generated";

export const createMockServer = async () => {
	const mockServer = new Server({
		routes() {
			this.post("/graphql", createGraphQLHandler(schema, this.schema));
		},
		models: {
			todo: Model.extend({
				list: belongsTo({
					inverse: 'todos'
				})
			}),
			list: Model.extend({
				todos: hasMany('todo'),
			})
		},
		factories: {
			todo: Factory.extend({
				title: (index) => `todo title ${index}`,
				completed: (index) => index % 2 === 0,
				content: (index) => index % 2 === 0 ? `todo content ${index}` : null
			}),
			list: Factory.extend({
				title: (index) => `todo list ${index}`,
			}),
		},
		seeds(server) {
			// list with empty todos
			server.create("list");

			// list with some todos
			server.create("list",{
				todos: server.createList('todo', 5)
			});

			// some todos not connected to any lists
			server.createList("todo", 5);
		},
	})

	// fast access in runtime for debugging
	// @ts-expect-error //mockServer not exists on window
	window.mockServer = mockServer

	return mockServer
}
