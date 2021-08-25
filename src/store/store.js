import {combineReducers, createStore} from "redux";
import counter from "./reducers/counter";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;