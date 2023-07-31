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
export const Main: FC = (props) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const { fetchAllComments } = useCommentManager();
  useEffect(() => {
    fetchAllComments().then((res) => {
      setComments(res?.data);
    });
  }, [fetchAllComments]);
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
