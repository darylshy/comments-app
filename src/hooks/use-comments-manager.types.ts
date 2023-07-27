export enum CatchError {
  Canceled = "request canceled",
  NotCreated = "error creating comment",
  NotFetched = "error fetching comment",
  NotDeleted = "error deleting comment",
  NoneFetched = "error fetching comments",
  NoneDeleted = "error deleting comments",
}

export interface ICatchError<T extends CatchError> {
  error: unknown;
  cancelMessage: T extends keyof typeof CatchError
    ? (typeof CatchError)[T]
    : string;
  crudMessage: T extends keyof typeof CatchError
    ? (typeof CatchError)[T]
    : string;
}

export interface IComment {
  created: Date;
  id: number;
  message: string;
  name: string;
}
