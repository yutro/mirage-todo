import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { schema } from "../generated";

const mockServer = createServer({
  routes() {
    this.post("/graphql", createGraphQLHandler(schema, this.schema));
  },
});

Object.assign(window, { mockServer });
