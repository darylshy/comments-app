import { styled } from "styled-components";
import { Button } from "../../atoms/buttons/Button";

export const StyledCommentButton = styled(Button)`
  background: transparent;
  width: 100px;
  margin-left: auto;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.flameLight};
  color: ${({ theme }) => theme.colors.flameLight};
  border-radius: 20px;
  &:hover {
    background: ${({ theme }) => theme.colors.flameLight};
    color: ${({ theme }) => theme.colors.whiteDark};
  }
`;
