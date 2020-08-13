import { initialState, IInitialState } from ".";

import { IAction } from "./actionsTypes";
import {
  CREATE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  REMOVE_TASK_SUCCESS,
} from "./types";

import { ITodoItem } from "../models/TodoItem.model";

export default (
  state: IInitialState = initialState,
  action: IAction
): IInitialState => {
  switch (action.type) {
    case CREATE_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    case EDIT_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((item: ITodoItem) => {
          if (item.id === action.payload.id) {
            item.descr = action.payload.descr;
          }
          return item;
        }),
      };
    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter(
          (item: ITodoItem) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
