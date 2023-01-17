import { createMockServer, MockServerType } from "../mockServer";
import { ApiDataProvider } from "./ApiDataProvider";
import { AddTodo } from "./AddTodo";

const renderAddTodo = () =>
  cy.mount(
    <ApiDataProvider>
      <AddTodo />
    </ApiDataProvider>
  );

describe("AddTodo", () => {
  let mockServer: MockServerType;

  beforeEach(() => {
    mockServer = createMockServer("test");
  });

  afterEach(() => {
    mockServer.shutdown();
  });

  it("should create new todo item", () => {
    const testTodoText = "wash car";

    renderAddTodo();

    cy.findByPlaceholderText("Type todo text here")
      .should("be.visible")
      .should("be.enabled")
      .type(testTodoText);

    cy.findByText("Add")
      .should("be.enabled")
      .click()
      .then(() => {
        expect(
          mockServer.schema.findBy("todo", { content: testTodoText })
        ).to.not.eq(null);
      });
  });
});
