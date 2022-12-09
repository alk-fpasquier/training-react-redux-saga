import { useCallback, useState } from "react";
import "./App.css";
import { HomePage } from "./home/HomePage";
import { ReduxSagaPage } from "./redux-saga/ReduxSagaPage";
import { ReduxPage } from "./redux/ReduxPage";
import { JotaiPage } from "./jotai/JotaiPage";
import { ReactQueryPage } from "./react-query/ReactQueryPage";

export function App() {
  const { page, updatePage } = usePage();

  return (
    <div className="App">
      <header className="App__header">
        <button
          className="App__headerButton"
          onClick={() => updatePage("home")}
          disabled={page === "home"}
        >
          Home
        </button>
        <button
          className="App__headerButton"
          onClick={() => updatePage("redux")}
          disabled={page === "redux"}
        >
          Redux
        </button>
        <button
          className="App__headerButton"
          onClick={() => updatePage("saga")}
          disabled={page === "saga"}
        >
          Saga
        </button>
        <button
          className="App__headerButton"
          onClick={() => updatePage("jotai")}
          disabled={page === "jotai"}
        >
          Jotai
        </button>
        <button
          className="App__headerButton"
          onClick={() => updatePage("react-query")}
          disabled={page === "react-query"}
        >
          React Query
        </button>
      </header>
      {page === "home" ? (
        <HomePage />
      ) : page === "redux" ? (
        <ReduxPage />
      ) : page === "saga" ? (
        <ReduxSagaPage />
      ) : page === "jotai" ? (
        <JotaiPage />
      ) : page === "react-query" ? (
        <ReactQueryPage />
      ) : null}
    </div>
  );
}

function setQueryParams(params: { [key: string]: string }): void {
  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  window.history.pushState({}, "", url);
}

function usePage() {
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.href);
    const currentPage = url.searchParams.get("page");
    if (!currentPage) {
      setQueryParams({ page: "home" });
    }
    return currentPage || "home";
  });

  const updatePage = useCallback((newPage: string) => {
    setQueryParams({ page: newPage });
    setPage(newPage);
  }, []);

  return { page, updatePage };
}
