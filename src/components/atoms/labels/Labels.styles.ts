import { styled } from "styled-components";
import { Label } from "./Label";

export const StyledLabel = styled(Label)`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.flameMedium};
`;
