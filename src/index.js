import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { MediaContextProvider } from "./context/MediaContext.js";
import "./global.styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MediaContextProvider>
          <App />
        </MediaContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
