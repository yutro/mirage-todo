import { render, screen, waitFor } from "@testing-library/react";
import { createMockServer, MockServerType } from "mockServer";
import { MOCK_SERVER_HOST } from "../../mockServer/mockServerConfig";
import { Response } from "miragejs";
import { createErrorResponse } from "../../mockServer/utils/createErrorResponse";

import {
	APIDataProvider,
	TEXT_SectionPreloader,
} from "../../shared/components";
import { TaskLists, TEXT_TaskLists } from "./TaskLists";

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

	it("should render error text when API throws an exception", () => {
		renderTestComponent();

		mockServer.post(
			MOCK_SERVER_HOST,
			createErrorResponse(["server went on vacation"]),
		);

		waitFor(() =>
			expect(screen.getByText(TEXT_TaskLists.error)).toBeInTheDocument(),
		);
	});
});
