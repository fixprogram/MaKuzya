import data from "./mocks/data";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App data={data} />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
