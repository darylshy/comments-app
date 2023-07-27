import axios from "axios";
import { useCallback } from "react";
import {
  CatchError,
  ICatchError,
  IComment,
} from "./use-comments-manager.types";

export function useCommentManager() {
  const source = axios.CancelToken.source();
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

  const createComment = useCallback(
    async (comment: IComment) => {
      try {
        const response = await axios.post("/createComment", {
          cancelToken: source.token,
          ...comment,
        });
        return response;
      } catch (error) {
        catchError({
          error,
          cancelMessage: CatchError.Canceled,
          crudMessage: CatchError.NotCreated,
        });
      }
    },
    [source.token]
  );

  const fetchCommentById = useCallback(
    async (id: number) => {
      try {
        const response = await axios.get("/getComment", {
          cancelToken: source.token,
          params: { id },
        });
        return response;
      } catch (error) {
        catchError({
          error,
          cancelMessage: CatchError.Canceled,
          crudMessage: CatchError.NotFetched,
        });
      }
    },
    [source.token]
  );

  const deleteCommentById = useCallback(
    async (id: number) => {
      try {
        const response = await axios.delete("/deleteComment", {
          cancelToken: source.token,
          params: { id },
        });
        return response;
      } catch (error) {
        catchError({
          error,
          cancelMessage: CatchError.Canceled,
          crudMessage: CatchError.NotDeleted,
        });
      }
    },
    [source.token]
  );

  const fetchAllComments = useCallback(async () => {
    try {
      const response = await axios.get("/getComments", {
        cancelToken: source.token,
      });
      return response;
    } catch (error) {
      catchError({
        error,
        cancelMessage: CatchError.Canceled,
        crudMessage: CatchError.NoneFetched,
      });
    }
  }, [source.token]);

  const deleteAllComments = useCallback(async () => {
    try {
      const response = await axios.delete("/deleteComments", {
        cancelToken: source.token,
      });
      return response;
    } catch (error) {
      catchError({
        error,
        cancelMessage: CatchError.Canceled,
        crudMessage: CatchError.NoneDeleted,
      });
    }
  }, [source.token]);

  const cleanup = useCallback(() => {
    source.cancel();
  }, [source]);

  return {
    cleanup,
    createComment,
    deleteAllComments,
    deleteCommentById,
    fetchAllComments,
    fetchCommentById,
  };
}
