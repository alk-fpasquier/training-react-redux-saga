import type { Action, PayloadAction, Reducer } from "@reduxjs/toolkit";

/* Reducer state type */

export interface CounterState {
  value: number;
}

/* Reducers actions */

const INCREMENT_ACTION = "counter/increment";
const DECREMENT_ACTION = "counter/decrement";
const INCREMENT_BY_ACTION = "counter/incrementBy";

export const incrementAction = (): Action => ({ type: INCREMENT_ACTION });
export const decrementAction = (): Action => ({ type: DECREMENT_ACTION });
export const incrementByAction = (payload: number): PayloadAction<number> => ({
  type: INCREMENT_BY_ACTION,
  payload,
});

/* Reducers functions */

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
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>
  | ReturnType<typeof incrementByAction>;

const initialState: CounterState = {
  value: 0,
};

export const counterReducer: Reducer<CounterState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
