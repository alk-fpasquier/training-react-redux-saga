import type { Action, PayloadAction, Reducer } from "@reduxjs/toolkit";

/* Reducer state type */

export interface CounterState {
  value: number;
}

/* Reducers actions */

const INCREMENT_ACTION = "counter/increment";
const INCREMENT_BY_ACTION = "counter/incrementBy";
const DECREMENT_ACTION = "counter/decrement";

export const incrementAction = (): Action => ({ type: INCREMENT_ACTION });

export const incrementByAction = (payload: number): PayloadAction<number, string> => ({
  type: INCREMENT_BY_ACTION,
  payload
});

export const decrementAction = (): Action => ({ type: DECREMENT_ACTION });


/* Reducers functions */

const increment = (state: CounterState): CounterState => ({
  ...state,
  value: state.value + 1
});

const incrementBy = (
  state: CounterState,
  action: ReturnType<typeof incrementByAction>
): CounterState => ({
  ...state,
  value: state.value + action.payload
});

const decrement = (state: CounterState): CounterState => ({
  ...state,
  value: state.value - 1
});

/** Main reducer */

type Actions =
  | ReturnType<typeof incrementAction>
  | ReturnType<typeof decrementAction>
  | ReturnType<typeof incrementByAction>
  ;

const initialState: CounterState = {
  value: 0,
};

export const counterReducer: Reducer<CounterState, Actions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return increment(state);
      case INCREMENT_BY_ACTION:
        return incrementBy(state, action as ReturnType<typeof incrementByAction>);
      case DECREMENT_ACTION:
        return decrement(state);
    default:
      return state;
  }
};
