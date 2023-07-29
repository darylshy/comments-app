import axios, { CancelTokenSource } from "axios";
import { useCallback } from "react";
import { CatchError, ICatchError } from "./use-comments-manager.types";

export function useFetchHelpers() {
  const catchError = <T extends CatchError>({
    error,
    cancelMessage,
    crudMessage,
  }: ICatchError<T>) => {
    if (axios.isCancel(error)) {
      console.log(cancelMessage);
    } else {
      console.error(crudMessage, error);
    }
  };

  const cleanup = useCallback((source: CancelTokenSource) => {
    source.cancel();
  }, []);

  return {
    catchError,
    cleanup,
  };
}
