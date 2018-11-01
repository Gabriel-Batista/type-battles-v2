import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { ActionCableProvider } from "react-actioncable-provider";

import GameReducer from "./Reducers/GameReducer";
import UserReducer from "./Reducers/UserReducer";

import { FetchConst } from "./Constants/FetchConst";

const rootReducer = combineReducers({
    game: GameReducer,
    user: UserReducer
});
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <ActionCableProvider url={FetchConst.API_WS}>
            <App />
        </ActionCableProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
