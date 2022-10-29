import { createServer } from "miragejs";
import { MockServerConfig, MockServerType } from "./mockServer.types";
import { mockServerConfig } from "./mockServerConfig";
export * from "./mockServer.types";

export const createMockServer = (
	config?: Omit<MockServerConfig, "factories" | "models">,
) => {
	const mockServer: MockServerType = createServer({
		...mockServerConfig,
		...config,
	});

	// fast access in runtime for debugging
	// @ts-expect-error //mockServer not exists on window
	window.mockServer = mockServer;

	return mockServer;
};
