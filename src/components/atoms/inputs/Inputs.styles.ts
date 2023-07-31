import { styled } from "styled-components";
import { Input } from "./Input";

export const StyledInput = styled(Input)`
  background: ${({ theme }) => theme.colors.whiteLight};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.greyDark};
  padding: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  width: 100%;
`;
