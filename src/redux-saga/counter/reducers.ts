import type { Action, PayloadAction, Reducer } from "@reduxjs/toolkit";

/* Reducer state type */

export interface CounterState {
  value: number;
  isFetching: boolean;
}

/* Reducers actions */

export const FETCH_COUNTER_ACTION = "counter/fetch";
export const SET_COUNTER_ACTION = "counter/set";
export const INCREMENT_ACTION = "counter/increment";
export const DECREMENT_ACTION = "counter/decrement";
export const INCREMENT_BY_ACTION = "counter/incrementBy";

export const fetchCounterAction = (): Action => ({
  type: FETCH_COUNTER_ACTION,
});
export const setCounterAction = (payload: number): PayloadAction<number> => ({
  type: SET_COUNTER_ACTION,
  payload,
});
export const incrementAction = (): Action => ({ type: INCREMENT_ACTION });
export const decrementAction = (): Action => ({ type: DECREMENT_ACTION });
export const incrementByAction = (payload: number): PayloadAction<number> => ({
  type: INCREMENT_BY_ACTION,
  payload,
});

/* Reducers functions */

const fetchCounterReducer = (state: CounterState): CounterState => ({
  ...state,
  isFetching: true,
});

const setCounterReducer = (
  state: CounterState,
  action: ReturnType<typeof setCounterAction>
): CounterState => ({
  ...state,
  value: action.payload,
  isFetching: false,
});

const increment = (state: CounterState): CounterState => {
  return { ...state, value: state.value + 1 };
};

const decrement = (state: CounterState): CounterState => {
  return { ...state, value: state.value - 1 };
};

const incrementBy = (state: CounterState, count: number): CounterState => {
  return { ...state, value: state.value + count };
};

/** Main reducer */

type Actions =
  | ReturnType<typeof fetchCounterAction>
  | ReturnType<typeof setCounterAction>
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>
  | ReturnType<typeof incrementByAction>;

const initialState: CounterState = {
  value: 0,
  isFetching: false,
};

export const counterReducer: Reducer<CounterState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_COUNTER_ACTION:
      return fetchCounterReducer(state);
    case SET_COUNTER_ACTION:
      return setCounterReducer(
        state,
        action as ReturnType<typeof setCounterAction>
      );
    case INCREMENT_ACTION:
      return increment(state);
    case DECREMENT_ACTION:
      return decrement(state);
    case INCREMENT_BY_ACTION:
      return incrementBy(
        state,
        (action as ReturnType<typeof incrementByAction>).payload
      );
    default:
      return state;
  }
};
