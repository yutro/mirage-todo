import { Factory } from "miragejs";
import { MockServerFactories } from "./mockServer.types";

export const factories: MockServerFactories = {
	todo: Factory.extend({
		id: index => index,
		title: index => `todo title ${index}`,
		completed: index => index % 2 === 0,
		content: index => (index % 2 === 0 ? `todo content ${index}` : null),
	}),
	todoList: Factory.extend({
		id: index => index.toString(),
		title: index => `todo list ${index}`,
		todos: [],
	}),
};
