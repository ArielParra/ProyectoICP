import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary> {/* Wrap your App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// Initialize performance monitoring tools (e.g., Google Analytics)
analytics.init();

// Register service worker (optional, for progressive web apps)
serviceWorker.register();
