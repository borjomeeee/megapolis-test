import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

export const initialState = { tasks: [], error: "" };
export type IInitialState = typeof initialState;

const store = createStore(reducer, composeWithDevTools());
export default store;
