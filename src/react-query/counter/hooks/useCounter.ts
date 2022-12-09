import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCounter, postCounter } from "../apis";

export const useCounter = () => useQuery({
  queryKey: ['counter'],
  queryFn: fetchCounter
});

export const useIncrementCounter = () => {
  const { data: counter } = useCounter()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postCounter((counter || 0) + 1),
    // Optional: Optimistic update
    onMutate: () => {
      queryClient.setQueryData<number>(['counter'], previousCounter => previousCounter
        ? previousCounter + 1
        : previousCounter
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counter'] })
    },
  })
};

export const useDecrementCounter = () => {
  const { data: counter } = useCounter()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postCounter((counter || 0) - 1),
    // Optional: Optimistic update
    onMutate: () => {
      queryClient.setQueryData<number>(['counter'], previousCounter => previousCounter
        ? previousCounter - 1
        : previousCounter
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counter'] })
    },
  })
};