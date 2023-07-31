import { FC } from "react";
import { StyledTextSm } from "../../atoms";
import { StyledCommentButton } from "./CommentButton.styles";

export const CommentButton: FC = (props) => {
  return (
    <StyledCommentButton type="submit">
      <StyledTextSm>Comment</StyledTextSm>
    </StyledCommentButton>
  );
};
