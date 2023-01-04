import { createServer, Factory } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { FactoryDefinition, ModelDefinition, Registry } from "miragejs/-types";
import { Server } from "miragejs/server";
import { schema, Todo } from "../generated";

type MockServerModels = Readonly<{
  todo: ModelDefinition<Todo>;
}>;

type MockServerFactories = Readonly<{
  todo: FactoryDefinition<Todo>;
}>;

export type MockServerType = Server<
  Registry<MockServerModels, MockServerFactories>
>;

export const initMockServer = (
  environment?: "test" | "development"
): MockServerType => {
  const mockServer = createServer<MockServerModels, MockServerFactories>({
    logging: true,
    timing: 50,
    environment,
    routes() {
      this.post("/graphql", createGraphQLHandler(schema, this.schema));
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
