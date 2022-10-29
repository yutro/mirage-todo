import { MockServerConfig } from "./mockServer.types";

export const seeds: MockServerConfig["seeds"] = server => {
	// list with empty todos
	server.create("todoList");

	// list with some todos
	server.create("todoList", {
		todos: server.createList("todo", 5),
	});

	// some todos not connected to any lists
	server.createList("todo", 5);
};
