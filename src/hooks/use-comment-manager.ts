import axios from "axios";
import { useCallback } from "react";
import { CatchError, IComment } from "./use-comments-manager.types";
import { useFetchHelpers } from "./use-fetch-helpers";

export function useCommentManager() {
  const source = axios.CancelToken.source();
  const { catchError } = useFetchHelpers();

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
    [catchError, source.token]
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
    [catchError, source.token]
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
    [catchError, source.token]
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
  }, [catchError, source.token]);

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
  }, [catchError, source.token]);

  return {
    createComment,
    deleteAllComments,
    deleteCommentById,
    fetchAllComments,
    fetchCommentById,
  };
}
