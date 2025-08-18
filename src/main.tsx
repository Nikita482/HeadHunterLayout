import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { Store } from "./store/store.ts";

import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Provider store={Store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </MantineProvider>
  </StrictMode>
);
