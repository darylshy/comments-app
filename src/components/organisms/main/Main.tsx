import { FC, useEffect, useState } from "react";
import { useCommentManager } from "../../../hooks/use-comment-manager";
import { Comment } from "../comment/Comment";
import { IComment } from "../comment/comment.types";
import { StyledCommentForm } from "../form/CommentForm.styles";
import {
  StyledMainContainer,
  StyledMainLeft,
  StyledMainRight,
} from "./Main.styles";
import { CatchError } from "../../../hooks/use-comments-manager.types";
import { useFetchHelpers } from "../../../hooks/use-fetch-helpers";
export const Main: FC = (props) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const { fetchAllComments } = useCommentManager();
  const { catchError } = useFetchHelpers();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetchAllComments();
        setComments(res?.data);
      } catch (error) {
        catchError({
          error,
          cancelMessage: CatchError.Canceled,
          crudMessage: CatchError.NoneFetched,
        });
      }
    };
    fetchComments();
  }, [catchError, fetchAllComments]);

  return (
    <StyledMainContainer>
      <StyledMainLeft>
        <StyledCommentForm action="/createComment" />
      </StyledMainLeft>
      <StyledMainRight>
        {comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
      </StyledMainRight>
    </StyledMainContainer>
  );
};
