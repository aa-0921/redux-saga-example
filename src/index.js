import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";

//sagaを使う準備
const sagaMiddleware = createSagaMiddleware();
//storeにsagaMiddlewareを追加
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//sagaの実行。applyMiddlewareフェーズの後でのみSagasを実行するために使用できます。
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
