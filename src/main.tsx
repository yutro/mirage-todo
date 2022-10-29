import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { setup } from "twind/shim";

import { AppRoutes } from "./App";
import { createMockServer } from "./mockServer";
import { APIDataProvider } from "./shared/components";

const container = document.getElementById("root");

if (!container) throw new Error("app container is missing");

createMockServer();

setup({
	target: container,
});

ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<APIDataProvider>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</APIDataProvider>
	</React.StrictMode>,
);
