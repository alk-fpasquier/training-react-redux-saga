import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Counter } from "./counter/Counter";

const queryClient = new QueryClient()

export function ReactQueryPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query</h1>
      <Counter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
