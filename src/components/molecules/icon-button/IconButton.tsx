import { FC, PropsWithChildren } from "react";
import { StyledMetaTextGrey } from "../../atoms";
import { StyledIconButton } from "./IconButton.styles";
import { IIConButton } from "./icon-button.types";

export const IconButton: FC<PropsWithChildren<IIConButton>> = ({
  buttonText,
  onClick,
  children,
}) => {
  return (
    <StyledIconButton onClick={onClick}>
      {children}
      <StyledMetaTextGrey>{buttonText}</StyledMetaTextGrey>
    </StyledIconButton>
  );
};
