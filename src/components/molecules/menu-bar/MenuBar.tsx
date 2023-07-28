import { FC } from "react";
import {
  StyledBodyText,
  StyledMenuBarLogoText,
  StyledMetaText,
} from "../../atoms";
import {
  StyledMenuBarContainer,
  StyledMenuBarContentLeft,
  VerticalDivider,
} from "./StyledMenuBar";
import { IMenuBar } from "./menu-bar.types";

export const MenuBar: FC<IMenuBar> = ({ hotTake }) => {
  return (
    <StyledMenuBarContainer>
      <img
        src={process.env.PUBLIC_URL + "/assets/site-logo-100x100.png"}
        alt="site logo"
        height={100}
        width={100}
      />
      <StyledMenuBarContentLeft>
        <StyledMenuBarLogoText>Hot Takes</StyledMenuBarLogoText>
        <StyledMetaText>
          AI Generated Hot Takes, powered by OpenAI&copy;
        </StyledMetaText>
      </StyledMenuBarContentLeft>
      <VerticalDivider />
      <StyledBodyText>{hotTake}</StyledBodyText>
      <VerticalDivider />
    </StyledMenuBarContainer>
  );
};