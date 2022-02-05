import React from "react";
import TemplateWrapper from "./component/TemplateWrapper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Redux/Reducers/index";
import "./App.css";

function App() {
  const store = createStore(reducers, {});
  return (
    <Provider store={store}>
      <div className="container">
        <TemplateWrapper />
      </div>
    </Provider>
  );
}

export default App;
