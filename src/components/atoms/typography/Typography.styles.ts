import { styled } from "styled-components";

//Base Typography Elements ==================================>
export const StyledMenuBarLogoText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap");
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const StyledHeaderText = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const StyledLabelText = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
`;

export const StyledBodyText = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: font-size: ${({ theme }) => theme.fontSizes.sm};;

`;

export const StyledMetaText = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

//Variants=============================================>
export const HotTakeBodyText = styled(StyledBodyText)`
  color: #787889;
  text-align: center;
  padding: 30px;
  display: flex;
  align-items: center;
`;

export const StyledIconButtonText = styled(StyledMetaText)`
  color: #787889;
`;
