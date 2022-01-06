import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducer/indexRed";
import initialState from "./store/initialState";

const store = createStore(rootReducer, initialState);



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);