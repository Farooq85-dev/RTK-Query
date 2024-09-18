import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { posts } from "./Redux/Redux.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={posts}>
      <App />
    </ApiProvider>
  </StrictMode>
);
