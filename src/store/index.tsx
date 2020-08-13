import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

import { ITodoItem } from "../models/TodoItem.model";

export const initialState = {
  tasks: [
    { id: 1, descr: "Описание 1" },
    { id: 2, descr: "Описание 2" },
    { id: 3, descr: "Описание 3" },
  ] as ITodoItem[],
  error: "",
};
export type IInitialState = typeof initialState;

const store = createStore(reducer, composeWithDevTools());
export default store;
