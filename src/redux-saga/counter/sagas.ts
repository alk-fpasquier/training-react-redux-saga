import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchCounter, postCounter } from "./apis";
import { FETCH_COUNTER_ACTION, INCREMENT_ACTION, setCounterAction } from "./reducers";

export function* counterSaga() {
  yield takeLatest(FETCH_COUNTER_ACTION, fetchCounterSaga);
  yield takeLatest (INCREMENT_ACTION, incrementCounterSaga);
}

function* fetchCounterSaga() {
  const counter: number = yield call(fetchCounter);
  yield put(setCounterAction(counter));
}

function* incrementCounterSaga() {
  yield delay(500);
  const count = yield select((state) => state.counter.value);
  console.log("post count:", count);
  yield call(postCounter, count);
  console.log("post done");
}