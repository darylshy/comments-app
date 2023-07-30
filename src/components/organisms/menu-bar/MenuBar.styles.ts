import { styled } from "styled-components";
import { themeExtractor } from "../../../App.theme";

export const StyledMenuBarContainer = styled.div`
  max-height: 100px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.whiteLight};
`;

export const StyledMenuBarContentLeft = styled.div`
  ${({ theme }) => themeExtractor(theme.stackVerticalMiddle)}
  margin-left: -20px;
  margin-right: 20px;
`;

export const StyledMenuBarContentRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const StyledMenuBarContentMiddle = styled.div`
  display: flex;
  align-items: center;
`;
