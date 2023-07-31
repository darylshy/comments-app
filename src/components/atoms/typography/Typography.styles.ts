import { styled } from "styled-components";

//Base Typography Elements ==================================>
export const StyledTextLg = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const StyledTextMd = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const StyledTextSm = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const StyledTextXs = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

//Variants=============================================>
export const StyledMenuBarLogoText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap");
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 4px;
`;

export const StyledHTBodyText = styled(StyledTextSm)`
  color: ${({ theme }) => theme.colors.greyDark};
  text-align: center;
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const StyledMetaTextGrey = styled(StyledTextXs)`
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const StyledLabelTextGrey = styled(StyledTextMd)`
  color: ${({ theme }) => theme.colors.greyDark};
`;
