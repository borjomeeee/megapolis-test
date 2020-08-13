import { takeLeading, put } from "redux-saga/effects";

import { DOWNLOAD_TASKS, CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "./types";
import {
  downloadTasksSuccessAction,
  createTaskSuccessAction,
  editTaskSuccessAction,
  removeTaskSuccessAction,
  createTaskAction,
  editTaskAction,
  removeTaskAction,
} from "./actions";

function* downloadTasksSaga() {
  yield put(
    downloadTasksSuccessAction([
      { id: 1, descr: "Описание 1" },
      { id: 2, descr: "Описание 2" },
    ])
  );
}

function* createTaskSaga({ payload }: ReturnType<typeof createTaskAction>) {
  yield put(createTaskSuccessAction({ id: 3, descr: payload.descr }));
}

function* editTaskSaga({ payload }: ReturnType<typeof editTaskAction>) {
  yield put(editTaskSuccessAction(payload.id, payload.descr));
}

function* removeTaskSaga({ payload }: ReturnType<typeof removeTaskAction>) {
  yield put(removeTaskSuccessAction(payload.id));
}

export default function* rootSaga() {
  yield takeLeading(DOWNLOAD_TASKS, downloadTasksSaga);
  yield takeLeading(CREATE_TASK, createTaskSaga);
  yield takeLeading(EDIT_TASK, editTaskSaga);
  yield takeLeading(REMOVE_TASK, removeTaskSaga);
}
