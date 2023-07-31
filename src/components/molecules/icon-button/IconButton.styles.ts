import { styled } from "styled-components";
import { themeExtractor } from "../../../App.theme";
import { Button } from "../../atoms/buttons/Button";

export const StyledIconButton = styled(Button)`
  ${({ theme }) => themeExtractor(theme.stackVerticalCenter)}
  cursor: pointer;
  &:hover span {
    color: ${({ theme }) => theme.colors.flameLight};
  }
`;
