import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCounter } from "./apis";
import { FETCH_COUNTER_ACTION, setCounterAction } from "./reducers";

export function* counterSaga() {
  yield takeLatest(FETCH_COUNTER_ACTION, fetchCounterSaga);
}

function* fetchCounterSaga() {
  const counter: number = yield call(fetchCounter);
  yield put(setCounterAction(counter));
}
