import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import SingleUserDetails from "./pages/SingleUserDetails";
import { store } from "./features/store";

import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:username" element={<SingleUserDetails />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
