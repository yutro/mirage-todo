
export const graphQLSchema = `
	type ToDo {
    id: ID!
    content: String!
  }

	type Query {
    todos:[ToDo!]!
  }
`