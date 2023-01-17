import { createServer, Factory } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { FactoryDefinition, ModelDefinition, Registry } from "miragejs/-types";
import { Server } from "miragejs/server";
import { Resolvers, schema, Todo } from "../generated";

type MockServerModels = Readonly<{
  todo: ModelDefinition<Todo>;
}>;

type MockServerFactories = Readonly<{
  todo: FactoryDefinition<Todo>;
}>;

export type MockServerType = Server<
  Registry<MockServerModels, MockServerFactories>
>;

const resolvers = (mockServer: MockServerType): Resolvers => {
  return {
    Mutation: {
      addTodo: (_, { input }) => {
        return mockServer.schema.create("todo", { ...input, completed: false });
      },
    },
  };
};

export const createMockServer = (
  environment?: "development" | "test"
): MockServerType => {
  const mockServer = createServer<MockServerModels, MockServerFactories>({
    environment,
    routes() {
      this.post(
        "/graphql",
        createGraphQLHandler(schema, this.schema, {
          resolvers: resolvers(this),
          context: undefined,
          root: undefined,
        })
      );
    },
    seeds(server) {
      server.createList("todo", 10);
    },
    factories: {
      todo: Factory.extend({
        id: (idx) => idx,
        content: (idx) => `${idx} - some content`,
        completed: (n) => n % 2 === 0,
      }),
    },
  });

  Object.assign(window, { mockServer });
  return mockServer;
};
