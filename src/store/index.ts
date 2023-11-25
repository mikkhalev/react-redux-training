import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {textReducer} from "./textReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter: counterReducer,
    text: textReducer
})
export const store = createStore(rootReducer, composeWithDevTools());