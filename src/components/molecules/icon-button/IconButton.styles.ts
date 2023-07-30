import { styled } from "styled-components";
import { Button } from "../../atoms/buttons/Button";
import { themeExtractor } from "../../../App.theme";

export const StyledRefreshHotTakeButton = styled(Button)`
  ${({ theme }) => themeExtractor(theme.stackVerticalCenter)}
  cursor: pointer;
  &:hover span {
    color: ${({ theme }) => theme.colors.flameLight};
  }
`;
