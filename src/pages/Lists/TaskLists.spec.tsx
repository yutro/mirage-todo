import { render, screen, waitFor } from "@testing-library/react";
import { createMockServer, MockServerType } from "mockServer";
import {
	APIDataProvider,
	TEXT_SectionPreloader,
} from "../../shared/components";
import { TaskLists } from "./TaskLists";

let mockServer: MockServerType;

const renderTestComponent = () =>
	render(
		<APIDataProvider>
			<TaskLists />
		</APIDataProvider>,
	);

describe("TaskLists", () => {
	beforeEach(() => {
		mockServer = createMockServer({ environment: "test" });
	});

	afterEach(() => {
		mockServer.shutdown();
	});

	it("should render preloader", () => {
		renderTestComponent();

		expect(screen.getByTitle(TEXT_SectionPreloader.title)).toBeInTheDocument();
	});

	it("should render todoListItem", () => {
		const todoList = mockServer.create("todoList");

		renderTestComponent();

		waitFor(() =>
			expect(screen.getByText(todoList.attrs.title)).toBeInTheDocument(),
		);
	});
});
