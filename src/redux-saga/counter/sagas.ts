import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchCounter, postCounter } from "./apis";
import {
  DECREMENT_ACTION,
  FETCH_COUNTER_ACTION,
  INCREMENT_ACTION,
  INCREMENT_BY_ACTION,
  setCounterAction,
} from "./reducers";

function withCatch(saga: any): any {
  return function* () {
    try {
      yield call(saga);
    } catch (e) {
      console.error(e);
    }
  };
}

export function* counterSaga() {
  yield takeLatest(FETCH_COUNTER_ACTION, withCatch(fetchCounterSaga));
  yield takeLatest(
    [INCREMENT_ACTION, DECREMENT_ACTION, INCREMENT_BY_ACTION],
    withCatch(saveCounterSaga)
  );
}

function* fetchCounterSaga() {
  const counter: number = yield call(fetchCounter);
  yield put(setCounterAction(counter));
}

function* saveCounterSaga() {
  yield delay(500);
  const count = yield select((state) => state.counter.value);
  yield call(postCounter, count);
}
