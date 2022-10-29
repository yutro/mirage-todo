import { createServer, Factory } from "miragejs";
import { MockServerType } from "./mockServer.types";
import { mockServerConfig } from "./mockServerConfig";

export const createMockServer = async () => {
	const mockServer: MockServerType = createServer(mockServerConfig);

	// fast access in runtime for debugging
	// @ts-expect-error //mockServer not exists on window
	window.mockServer = mockServer;

	return mockServer;
};
