import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="bottom-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
