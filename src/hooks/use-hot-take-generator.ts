import axios from "axios";
import { useCallback } from "react";
import { CatchError } from "./use-comments-manager.types";
import { useFetchHelpers } from "./use-fetch-helpers";

export function useHotTakeGenerator() {
  const { catchError } = useFetchHelpers();
  const source = axios.CancelToken.source();

  const generateHotTake = useCallback(async () => {
    try {
      const response = await axios.post("/generateHotTake", {
        cancelToken: source.token,
      });
      return response;
    } catch (error) {
      catchError({
        error,
        cancelMessage: CatchError.Canceled,
        crudMessage: CatchError.NotFetchedHotTake,
      });
    }
  }, [catchError, source.token]);

  return {
    generateHotTake,
  };
}
