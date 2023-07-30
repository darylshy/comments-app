import { FC, useCallback } from "react";
import { StyledBodyText } from "../../atoms";
import { StyledCommentButton } from "./CommentButton.styles";

export const CommentButton: FC = (props) => {
  const handleClick = useCallback(() => {
    alert("commented");
  }, []);

  return (
    <StyledCommentButton onClick={handleClick}>
      <StyledBodyText>Comment</StyledBodyText>
    </StyledCommentButton>
  );
};
