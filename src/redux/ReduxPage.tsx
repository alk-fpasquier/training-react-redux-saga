import { Provider } from "react-redux";
import { Counter } from "./counter/Counter";
import { context, store } from "./store";

export function ReduxPage() {
  return (
    <Provider store={store} context={context}>
      <h1>Redux</h1>
      <Counter />
    </Provider>
  );
}
