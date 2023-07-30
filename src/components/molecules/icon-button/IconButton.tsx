import {
  RefreshHotTakeIcon,
  StyledButtonTransparent,
  StyledMetaText,
} from "../../atoms";
import { IIConButton } from "./icon-button.types";

export const IconButton = ({ onClick, children }: IIConButton) => {
  return (
    <StyledButtonTransparent onClick={onClick}>
      <RefreshHotTakeIcon />
      <StyledMetaText>{children}</StyledMetaText>
    </StyledButtonTransparent>
  );
};
