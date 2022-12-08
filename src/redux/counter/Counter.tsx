import { useState } from "react";
import { useDispatch, useSelector } from "../store";
import "./Counter.css";
import {
  decrementAction,
  incrementAction,
  incrementByAction,
} from "./reducers";

export function Counter() {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <p>
        Count is <strong>{counter}</strong>
      </p>
      <p>
        <button
          className="Counter__button"
          onClick={() => dispath(incrementAction())}
        >
          Increment
        </button>
        <button
          className="Counter__button"
          onClick={() => dispath(decrementAction())}
        >
          Decrement
        </button>
        <button
          className="Counter__button"
          onClick={() => dispath(incrementByAction(inputValue))}
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
