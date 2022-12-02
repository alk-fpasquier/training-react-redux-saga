import type { Action, Reducer } from "@reduxjs/toolkit";

/* Reducer state type */

export interface CounterState {
  value: number;
}

/* Reducers actions */

const INCREMENT_ACTION = "counter/increment";

export const incrementAction = (): Action => ({ type: INCREMENT_ACTION });

/* Reducers functions */

const increment = (state: CounterState): CounterState => ({
  ...state,
  value: state.value + 1,
});

/** Main reducer */

type Actions = ReturnType<typeof incrementAction>;

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
    default:
      return state;
  }
};
