import * as TYPES from "./types";

import { ITodoItem } from "../models/TodoItem.model";

// Download
export const downloadTasksAction = () =>
  ({
    type: TYPES.DOWNLOAD_TASKS,
  } as const);

export const downloadTasksSuccessAction = (tasks: ITodoItem[]) =>
  ({
    type: TYPES.DOWNLOAD_TASKS_SUCCESS,
    payload: { tasks },
  } as const);

export const downloadTasksFailedAction = (errMsg: string) =>
  ({
    type: TYPES.DOWNLOAD_TASKS_FAILED,
    payload: { errMsg },
  } as const);

// Create
export const createTaskAction = (descr: string, nextIndex: number) =>
  ({
    type: TYPES.CREATE_TASK,
    payload: { descr, nextIndex },
  } as const);

export const createTaskSuccessAction = (task: ITodoItem) =>
  ({
    type: TYPES.CREATE_TASK_SUCCESS,
    payload: { task },
  } as const);

export const createTaskFailedAction = (errMsg: string) =>
  ({
    type: TYPES.CREATE_TASK_FAILED,
    payload: { errMsg },
  } as const);

// Edit
export const editTaskAction = (id: number, descr: string) =>
  ({
    type: TYPES.EDIT_TASK,
    payload: { id, descr },
  } as const);

export const editTaskSuccessAction = (id: number, descr: string) =>
  ({
    type: TYPES.EDIT_TASK_SUCCESS,
    payload: { id, descr },
  } as const);

export const editTaskFailedAction = (errMsg: string) =>
  ({
    type: TYPES.EDIT_TASK_FAILED,
    payload: { errMsg },
  } as const);

// Remove
export const removeTaskAction = (id: number) =>
  ({
    type: TYPES.REMOVE_TASK,
    payload: { id },
  } as const);

export const removeTaskSuccessAction = (id: string) =>
  ({
    type: TYPES.REMOVE_TASK_SUCCESS,
    payload: { id },
  } as const);

export const removeTaskFailedAction = (errMsg: string) =>
  ({
    type: TYPES.REMOVE_TASK_FAILED,
    payload: { errMsg },
  } as const);
