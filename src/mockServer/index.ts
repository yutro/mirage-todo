import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";

const schema = `
type Todo {
  id: ID!
  content: String!
}

type Query {
     todos: [Todo!]!
}
`;

const mockServer = createServer({
  routes() {
    this.post("/graphql", createGraphQLHandler(schema, this.schema));
  },
});

Object.assign(window, { mockServer });
