import { useCallback, useState } from "react";
import "./HomePage.css";

export function HomePage() {
  const [count, setCount] = useState({ value: 0 });

  const handleIncreaseCount = useCallback(() => {
    setCount(({ value }) => ({ value: value + 1 }));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React, Redux and Saga training</h1>
      <div className="HomePage__card">
        <button
          onClick={handleIncreaseCount}
        >
          count is {count.value}
        </button>
        <p>
          Edit <code>src/home/HomePage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="HomePage__readTheDocs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
