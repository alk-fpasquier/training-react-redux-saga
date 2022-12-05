import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Context, createContext } from "react";
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  EqualityFn,
} from "react-redux";
import reduxSaga from "redux-saga";
import { fork } from "redux-saga/effects";
import { counterReducer } from "./counter/reducers";
import { counterSaga } from "./counter/sagas";

const sagaMiddleware = reduxSaga();

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(function* rootSaga() {
  yield fork(counterSaga);
});

export type RootState = ReturnType<typeof store.getState>;

export const context: Context<{
  store: typeof store;
  subscription: any;
}> = createContext(null as any);

export const useStore: () => typeof store = createStoreHook(context);

export const useDispatch: () => typeof store.dispatch =
  createDispatchHook(context);

export const useSelector: <Selected = unknown>(
  selector: (state: RootState) => Selected,
  equalityFn?: EqualityFn<Selected>
) => Selected = createSelectorHook(context);
