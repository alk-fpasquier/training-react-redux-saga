import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import "./Counter.css";
import { fetchCounterAction, incrementAction } from "./reducers";

export function Counter() {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const isFetching = useSelector((state) => state.counter.isFetching);

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
        <button className="Counter__button" disabled={isFetching}>
          Decrement
        </button>
        <button className="Counter__button" disabled={isFetching}>
          Increment by
          <input
            className="Counter__inputNumber"
            type="number"
            onClick={(e) => e.stopPropagation()}
          />
        </button>
      </p>
    </>
  );
}
