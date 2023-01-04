import React from "react";
import { createMockServer, MockServerType } from "../mockServer";
import { ApiDataProvider } from "./ApiDataProvider";
import { TEXT, TodoList } from "./TodoList";

const renderTodoList = () =>
  cy.mount(
    <ApiDataProvider defaultOptions={{ queries: { retry: false } }}>
      <TodoList />
    </ApiDataProvider>
  );

describe("TodoList", () => {
  let mockServer: MockServerType;

  beforeEach(() => {
    mockServer = createMockServer("test");
  });

  afterEach(() => {
    mockServer.shutdown();
  });

  it("should display preloader while fetching data from API", () => {
    renderTodoList();

    cy.findByText(TEXT.loading).should("be.visible");
  });

  it("should display error message when Api is not available", () => {
    mockServer.shutdown();
    renderTodoList();

    cy.findByText(TEXT.error);
  });

  it("should render todo list with 1 item", () => {
    const content = "finish testing";

    mockServer.create("todo", { content });

    renderTodoList();

    cy.findByText(content);
  });
});
