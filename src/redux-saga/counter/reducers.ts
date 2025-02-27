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

export const fetchCounterAction = (): Action => ({
  type: FETCH_COUNTER_ACTION,
});
export const setCounterAction = (payload: number): PayloadAction<number> => ({
  type: SET_COUNTER_ACTION,
  payload,
});
export const incrementAction = (): Action => ({ type: INCREMENT_ACTION });

export const decrementAction = (): Action => ({ type: DECREMENT_ACTION });


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

const incrementReducer = (state: CounterState): CounterState => ({
  ...state,
  value: state.value + 1,
})

const decrementReducer = (state: CounterState): CounterState => ({
  ...state,
  value: state.value - 1,
})

/** Main reducer */

type Actions = ReturnType<typeof incrementAction>;

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
      return incrementReducer(state);
      case DECREMENT_ACTION:
        return decrementReducer(state);
    default:
      return state;
  }
};
