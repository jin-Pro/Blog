import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyle from "@Style/reset";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
