import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import { initMockServer, MockServerType } from "../mockServer";
import { ApiDataProvider } from "./ApiDataProvider";
import { TEXT, TodoList } from "./TodoList";

const renderTodoList = () => render(<TodoList />, { wrapper: ApiDataProvider });

describe("TodoList", () => {
  // let mockServer: MockServerType;
  //
  // beforeEach(() => {
  //   mockServer = initMockServer("test");
  // });
  //
  // afterEach(() => {
  //   mockServer.shutdown();
  // });

  // it("should display loading state while fetching data", () => {
  //   renderTodoList();
  //
  //   expect(screen.getByText(TEXT.loading)).toBeInTheDocument();
  // });

  // it("should display error message when API is throwing an exception", async () => {
  //   mockServer.db.todos.update("0", { content: false });
  //   renderTodoList();
  //
  //   await waitForElementToBeRemoved(screen.getByText(TEXT.error));
  //
  //   screen.getByText(TEXT.error);
  //   // waitFor(() => screen.getByText(TEXT.error));
  // });
  //
  it("should render toDoList", async () => {
    const mockServer = initMockServer("test");

    const {
      attrs: { content },
    } = mockServer.create("todo");

    renderTodoList();

    console.log("-9-");

    await waitForElementToBeRemoved(() => screen.getByText(TEXT.loading), {
      timeout: 5000,
    });

    await waitFor(() => screen.getByText(content));
  });
});
