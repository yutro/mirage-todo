import { Resolvers } from "../generated";
import { GraphqlResolverCtx } from "./mockServer.types";

export const resolvers: Resolvers<GraphqlResolverCtx> = {
	Mutation: {
		addToDo: (_, { input }, { mirageSchema }) => {
			const todo = mirageSchema.create("todo", {
				...input,
				completed: false,
			});

			return todo.attrs;
		},
		removeToDo: (_, args, { mirageSchema }) => {
			const todo = mirageSchema.findBy("todo", args);

			if (!todo)
				throw new Error(
					`removeToDo error: list with ${args} not found in mirage DB`,
				);

			todo.destroy();

			return todo.attrs;
		},
		removeToDoList: (_, args, { mirageSchema }) => {
			const todoList = mirageSchema.findBy("todoList", args);

			if (!todoList)
				throw new Error(
					`removeToDoList error: list with ${args} not found in mirage DB`,
				);

			todoList.destroy();

			return todoList.attrs;
		},
	},
};
