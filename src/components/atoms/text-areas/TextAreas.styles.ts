import { styled } from "styled-components";
import { TextArea } from "./TextArea";

export const StyledTextArea = styled(TextArea)`
  background: ${({ theme }) => theme.colors.whiteLight};
  color: ${({ theme }) => theme.colors.greyDark};
  margin-bottom: 20px;
  padding: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
`;
