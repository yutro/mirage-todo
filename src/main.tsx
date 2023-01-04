import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiDataProvider } from "./components/ApiDataProvider";

import { initMockServer } from "./mockServer";

if (import.meta.env.DEV) {
  initMockServer();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>
);
