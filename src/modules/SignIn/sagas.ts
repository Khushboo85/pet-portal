import { takeLatest } from "redux-saga/effects";
import * as Action from "./actions";
import { ACTION_TYPE } from "./types";

function* login(action: Action.ACTION_TYPES) {}

export default function* loginSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN, login);
}
