import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import necessary dependencies for global error handling
import ErrorBoundary from "./ErrorBoundary"; // Assuming you have an ErrorBoundary component

// Import necessary dependencies for performance monitoring
import * as analytics from "./analytics"; // Example: Google Analytics integration

// Import necessary dependencies for service workers
import * as serviceWorker from "./serviceWorker";

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
