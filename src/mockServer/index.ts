import { createServer, Factory } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { FactoryDefinition, ModelDefinition } from "miragejs/-types";
import { schema, Todo } from "../generated";

type MockServerModels = Readonly<{
  todo: ModelDefinition<Todo>;
}>;

type MockServerFactories = Readonly<{
  todo: FactoryDefinition<Todo>;
}>;

const mockServer = createServer<MockServerModels, MockServerFactories>({
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
    }),
  },
});

Object.assign(window, { mockServer });
