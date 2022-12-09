import "./Counter.css";
import {
  useCounter,
  useIncrementCounter,
  useDecrementCounter
} from "./hooks/useCounter";

export function Counter() {
  const {
    isLoading,
    isFetching,
    data: counter
  } = useCounter();

  const { mutate: handleIncrementClick, isLoading: isIncrementing } = useIncrementCounter()
  const { mutate: handleDecrementClick, isLoading: isDecrementing } = useDecrementCounter()

  const isDisabled = isFetching || isIncrementing || isDecrementing
  return (
    <>
      <p>
        {isLoading ? (
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
          onClick={() => handleIncrementClick()}
          disabled={isDisabled}
        >
          Increment
        </button>
        <button className="Counter__button" disabled={isDisabled}
          onClick={() => handleDecrementClick()}>
          Decrement
        </button>
        <button className="Counter__button" disabled={isDisabled}>
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
