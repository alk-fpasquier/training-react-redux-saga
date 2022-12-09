import { useAtom } from "jotai";
import { useState } from "react";
import { countAtom, decrementCountAtom, increaseCountByAtom, incrementCountAtom } from "./atoms/counter";
import "./Counter.css";

export function Counter() {
  const [inputValue, setInputValue] = useState(0);

  const [count] = useAtom(countAtom)

  const [, incrementCount] = useAtom(incrementCountAtom)
  const [, decrementCount] = useAtom(decrementCountAtom)
  const [, increaseCountBy] = useAtom(increaseCountByAtom)

  return (
    <>
      <p>
        Count is <strong>{count}</strong>
      </p>
      <p>
        <button
          className="Counter__button"
          onClick={() => incrementCount()}
        >
          Increment
        </button>
        <button className="Counter__button"
          onClick={() => decrementCount()}
        >Decrement</button>
        <button className="Counter__button"
          onClick={() => increaseCountBy(inputValue)}
        >
          Increment by
          <input
            className="Counter__inputNumber"
            type="number"
            onClick={(e) => e.stopPropagation()}
            value={inputValue}
            onChange={e => setInputValue(Number(e.target.value))}
          />
        </button>
      </p>
    </>
  );
}
