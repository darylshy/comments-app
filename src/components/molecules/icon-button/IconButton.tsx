import { StyledButtonTransparent, StyledMetaText } from "../../atoms";
import { StyledIconSVG } from "./IconSVG.styles";
import { IIConButton } from "./icon-button.types";

export const IconButton = ({
  onClick,
  iconAlt,
  iconSrc,
  children,
}: IIConButton) => {
  return (
    <StyledButtonTransparent onClick={onClick}>
      <StyledIconSVG src={iconSrc} alt={iconAlt} />
      <StyledMetaText>{children}</StyledMetaText>
    </StyledButtonTransparent>
  );
};
