import { Provider } from "react-redux";
import { Counter } from "./counter/Counter";
import { context, store } from "./store";

export function ReduxSagaPage() {
  return (
    <Provider store={store} context={context}>
      <h1>Redux Saga</h1>
      <Counter />
    </Provider>
  );
}
