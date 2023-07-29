import { styled } from "styled-components";

export const StyledMenuBarContainer = styled.div`
  max-height: 100px;
  display: flex;
  align-content: center;
  background-color: #fff;
`;

export const StyledMenuBarContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20px;
  margin-right: 20px;
  justify-content: center;
`;

export const StyledMenuBarContentRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const StyledMenuBarContentMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 90px;
  background-color: #d2d2d2;
  margin: 5px 15px;
`;
