import { styled } from "styled-components";

//TODO: Make a generic button that uses styled-component for bespoke styles
export const StyledButtonTransparent = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  //TODO: Separate this part out. Put here for development purposes only!
  &:hover span {
    color: #fdb026;
  }
`;
