import { useDispatch, useSelector } from "../store";
import "./Counter.css";
import { incrementAction } from "./reducers";

export function Counter() {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.value);
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
        <button className="Counter__button">Decrement</button>
        <button className="Counter__button">
          Increment by
          <input
            className="Counter__inputNumber"
            type="number"
            onClick={(e) => e?.stopPropagation()}
          />
        </button>
      </p>
    </>
  );
}
