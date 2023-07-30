import { styled } from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
`;

export const StyledMainLeft = styled.div`
  height: 100vh;
  width: 488.938px;
  padding: 0 10px;
  background: transparent;
  border-right: 2px solid ${({ theme }) => theme.colors.greyLight};
  padding-top: 20px;
`;

export const StyledMainRight = styled.div`
  flex: 1;
  background: transparent;
`;
