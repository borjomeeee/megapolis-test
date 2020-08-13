import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga";

import reducer from "./reducer";

import { ITodoItem } from "../models/TodoItem.model";

export const initialState = {
  tasks: [
    { id: 1, descr: "Описание 1" },
    { id: 2, descr: "Описание 2" },
    { id: 3, descr: "Описание 3" },
  ] as ITodoItem[],
  error: "",
  isLoading: true,
};
export type IInitialState = typeof initialState;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
