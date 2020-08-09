import * as ACTIONS from "./actions";

export type IAction =
  | ReturnType<typeof ACTIONS.downloadTasksAction>
  | ReturnType<typeof ACTIONS.downloadTasksSuccessAction>
  | ReturnType<typeof ACTIONS.downloadTasksFailedAction>
  | ReturnType<typeof ACTIONS.createTaskAction>
  | ReturnType<typeof ACTIONS.createTaskSuccessAction>
  | ReturnType<typeof ACTIONS.createTaskFailedAction>
  | ReturnType<typeof ACTIONS.editTaskAction>
  | ReturnType<typeof ACTIONS.editTaskSuccessAction>
  | ReturnType<typeof ACTIONS.editTaskFailedAction>
  | ReturnType<typeof ACTIONS.removeTaskAction>
  | ReturnType<typeof ACTIONS.removeTaskSuccessAction>
  | ReturnType<typeof ACTIONS.removeTaskFailedAction>;
