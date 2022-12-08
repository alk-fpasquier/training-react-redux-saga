import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../store";
import "./Counter.css";
import {
  decrementAction,
  fetchCounterAction,
  incrementAction,
  incrementByAction,
} from "./reducers";

export function Counter() {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isFetching = useSelector((state) => state.counter.isFetching);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    dispath(fetchCounterAction());
  }, []);

  return (
    <>
      <p>
        {isFetching ? (
          <>Fetching count...</>
        ) : (
          <>
            Count is <strong>{counter}</strong>
          </>
        )}
      </p>
      <p>
        <button
          className="Counter__button"
          onClick={() => dispath(incrementAction())}
          disabled={isFetching}
        >
          Increment
        </button>
        <button
          className="Counter__button"
          onClick={() => dispath(decrementAction())}
          disabled={isFetching}
        >
          Decrement
        </button>
        <button
          className="Counter__button"
          onClick={() => dispath(incrementByAction(inputValue))}
          disabled={isFetching}
        >
          Increment by
          <input
            className="Counter__inputNumber"
            type="number"
            onClick={(e) => e.stopPropagation()}
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
        </button>
      </p>
    </>
  );
}
