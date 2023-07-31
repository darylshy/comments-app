import { FC, useCallback } from "react";
import { useCommentManager } from "../../../hooks/use-comment-manager";
import { CatchError } from "../../../hooks/use-comments-manager.types";
import { useFetchHelpers } from "../../../hooks/use-fetch-helpers";
import { formatDate } from "../../../utils";
import { StyledDivider, StyledTextSm, StyledTextXs } from "../../atoms";
import { DeleteIcon } from "../../atoms/icons/DeleteIcon";
import { PersonIcon } from "../../atoms/icons/PersonIcon";
import { IconButton } from "../../molecules";
import { IComment } from "./comment.types";

export const Comment: FC<IComment> = ({ name, created, message, id }) => {
  const { deleteCommentById } = useCommentManager();
  const { catchError } = useFetchHelpers();

  const deleteComment = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const _deleteComment = async (commentId: number) => {
        try {
          await deleteCommentById(commentId);
        } catch (error) {
          catchError({
            error,
            cancelMessage: CatchError.Canceled,
            crudMessage: CatchError.NotDeleted,
          });
        }
      };

      const commentId = (
        event.currentTarget.closest("[data-id]") as HTMLElement
      )?.dataset.id;

      const commentIdInt = Number(commentId);

      if (Number.isInteger(commentIdInt)) {
        _deleteComment(commentIdInt);
      }
    },
    [catchError, deleteCommentById]
  );

  return (
    <div data-id={id}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PersonIcon />
        <StyledTextSm style={{ margin: "0 10px", color: "#787889" }}>
          {name}
        </StyledTextSm>
        <StyledTextSm style={{ marginRight: "10px", color: "#787889" }}>
          {message}
        </StyledTextSm>
        <StyledDivider
          $direction="horizontal"
          $thickness={1}
          $length={10}
          $spacing={{ top: 0, right: 5, bottom: 0, left: 5 }}
        />
        <StyledTextXs style={{ color: "#787889", marginRight: "20px" }}>
          {formatDate(created)}
        </StyledTextXs>
        <IconButton onClick={deleteComment}>
          <DeleteIcon />
        </IconButton>
      </div>
      <StyledDivider
        $direction="horizontal"
        $thickness={2}
        $length="100%"
        $spacing={{ top: 0, right: 0, bottom: 10, left: 0 }}
      />
    </div>
  );
};
