import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createMockServer } from "./mockServer";
import { ApiDataProvider } from "./components/ApiDataProvider";

if (import.meta.env.DEV) {
  createMockServer();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>
);
