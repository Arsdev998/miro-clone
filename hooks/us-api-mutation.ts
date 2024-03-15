import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (MutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const useApiMutation = useMutation(MutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return useApiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
  return {
    mutate,
    pending,
  };
};
