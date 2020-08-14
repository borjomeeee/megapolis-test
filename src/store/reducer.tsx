import { IAction } from "./actionsTypes";
import * as ACTIONS from "./types";

import { ITodoItem } from "../models/TodoItem.model";

const initialState = {
  tasks: [] as ITodoItem[],
  error: "",
  isLoading: true,
};
export type IInitialState = typeof initialState;

export default (
  state: IInitialState = initialState,
  action: IAction
): IInitialState => {
  switch (action.type) {
    case ACTIONS.DOWNLOAD_TASKS:
    case ACTIONS.CREATE_TASK:
    case ACTIONS.EDIT_TASK:
    case ACTIONS.REMOVE_TASK:
      return { ...state, isLoading: true };

    case ACTIONS.DOWNLOAD_TASKS_FAILED:
    case ACTIONS.CREATE_TASK_FAILED:
    case ACTIONS.EDIT_TASK_FAILED:
    case ACTIONS.REMOVE_TASK_FAILED:
      return { ...state, error: action.payload.errMsg, isLoading: false };

    case ACTIONS.DOWNLOAD_TASKS_SUCCESS:
      return { ...state, tasks: action.payload.tasks, isLoading: false };
    case ACTIONS.CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
        isLoading: false,
      };
    case ACTIONS.EDIT_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((item: ITodoItem) => {
          if (item.id === action.payload.id) {
            item.descr = action.payload.descr;
          }
          return item;
        }),
        isLoading: false,
      };
    case ACTIONS.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter(
          (item: ITodoItem) => item.id !== action.payload.id
        ),
        isLoading: false,
      };
    default:
      return state;
  }
};
