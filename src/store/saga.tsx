import axios from "axios";
import { takeLeading, put, call } from "redux-saga/effects";

import { DOWNLOAD_TASKS, CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "./types";
import * as ACTIONS from "./actions";

import { ITodoItem } from "../models/TodoItem.model";

function* downloadTasksSaga() {
  try {
    const res = yield call(axios.get, "https://test.megapolis-it.ru/api/list");
    const data = yield res.data;

    if (data.success) {
      if (Array.isArray(data.data)) {
        yield put(
          ACTIONS.downloadTasksSuccessAction(
            data.data.map((item: any) => ({
              id: item.id,
              descr: item.title,
            })) as ITodoItem[]
          )
        );
      } else {
        yield put(
          ACTIONS.downloadTasksFailedAction(
            "Не удалось обработать данные с сервера!"
          )
        );
      }
    } else {
      yield put(ACTIONS.downloadTasksFailedAction(data.error));
    }
  } catch {
    yield put(
      ACTIONS.downloadTasksFailedAction(
        "При скачивании данных с сервера произошла ошибка!"
      )
    );
  }
}

function* createTaskSaga({
  payload,
}: ReturnType<typeof ACTIONS.createTaskAction>) {
  try {
    const res = yield call(
      axios.post,
      "https://test.megapolis-it.ru/api/list",
      { title: payload.descr }
    );
    const data = yield res.data;

    if (data.success) {
      yield put(
        ACTIONS.createTaskSuccessAction({
          id: +data.id,
          descr: payload.descr,
        })
      );
    } else {
      yield put(ACTIONS.createTaskFailedAction(data.error));
    }
  } catch {
    yield put(
      ACTIONS.createTaskFailedAction(
        "В результате обработки запроса произошла ошибка!"
      )
    );
  }
}

function* editTaskSaga({ payload }: ReturnType<typeof ACTIONS.editTaskAction>) {
  try {
    const res = yield call(
      axios.post,
      `https://test.megapolis-it.ru/api/list/${payload.id}`,
      { title: payload.descr }
    );
    const data = yield res.data;

    if (data.success) {
      yield put(ACTIONS.editTaskSuccessAction(payload.id, payload.descr));
    } else {
      yield put(ACTIONS.removeTaskFailedAction(data.error));
    }
  } catch {
    yield put(
      ACTIONS.removeTaskFailedAction(
        "В результате обработки запроса произошла ошибка!"
      )
    );
  }
  yield put(ACTIONS.editTaskSuccessAction(payload.id, payload.descr));
}

function* removeTaskSaga({
  payload,
}: ReturnType<typeof ACTIONS.removeTaskAction>) {
  try {
    const res = yield call(
      axios.delete,
      `https://test.megapolis-it.ru/api/list/${payload.id}`
    );
    const data = yield res.data;

    if (data.success) {
      yield put(ACTIONS.removeTaskSuccessAction(payload.id));
    } else {
      yield put(ACTIONS.removeTaskFailedAction(data.error));
    }
  } catch {
    yield put(
      ACTIONS.removeTaskFailedAction(
        "В результате обработки запроса произошла ошибка!"
      )
    );
  }
}

export default function* rootSaga() {
  yield takeLeading(DOWNLOAD_TASKS, downloadTasksSaga);
  yield takeLeading(CREATE_TASK, createTaskSaga);
  yield takeLeading(EDIT_TASK, editTaskSaga);
  yield takeLeading(REMOVE_TASK, removeTaskSaga);
}
