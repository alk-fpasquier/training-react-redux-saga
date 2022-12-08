import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react";
import "./HomePage.css";

const Button = memo(function Button({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  return <button onClick={onClick}>count is {count}</button>;
});

export function HomePage() {
  const [count, setCount] = useState({ value: 0 });

  const [hookFlow, setHookFlow] = useState(false);

  const onClick = useCallback(() => {
    setCount((count) => ({ ...count, value: count.value + 1 }));
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
        <Button count={count.value} onClick={onClick} />
        <p>
          <button onClick={() => setHookFlow((show) => !show)}>
            {hookFlow ? "Unmount" : "Mount"} ReactHookFlow
          </button>
          {hookFlow && <ReactHookFlow />}
        </p>
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

function ReactHookFlow() {
  const [, setState] = useState(() => {
    console.log("Run lazy initializer");
    return {};
  });

  useLayoutEffect(() => {
    console.log("Run layoutEffect");
    return () => {
      console.log("Cleanup layoutEffect");
    };
  });

  useEffect(() => {
    console.log("Run effect");
    return () => {
      console.log("Cleanup effect");
    };
  });

  console.log("render");
  return <button onClick={() => setState({})}>Update</button>;
}
