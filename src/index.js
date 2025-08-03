import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import MainView from "./components/main-view/main-view";

function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
