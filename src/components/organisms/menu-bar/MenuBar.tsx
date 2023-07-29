import { FC, useCallback } from "react";
import {
  StyledBodyText,
  StyledMenuBarLogoText,
  StyledMetaText,
} from "../../atoms";
import { StyledButtonTransparent } from "../../atoms/buttons/Buttons.styles";
import {
  StyledMenuBarContainer,
  StyledMenuBarContentLeft,
  StyledMenuBarContentMiddle,
  StyledMenuBarContentRight,
  VerticalDivider,
} from "./MenuBar.styles";
import { IMenuBar } from "./menu-bar.types";

/**
 * TODO: React Suspense for loading hot take. Show message saying 'fetching new hot take...'
 * TODO: Show error message when hot take cannot be fetched [React Error Boundary? vs Axios Error Catching?]
 * TODO: Change refresh icon color on hover
 * TODO: Move image to a component instead of hard coding it into the menu bar
 *
 */

export const MenuBar: FC<IMenuBar> = ({ hotTake, refreshHotTake }) => {
  const handleClick = useCallback(() => {
    refreshHotTake();
  }, [refreshHotTake]);

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
      <StyledMenuBarContentMiddle>
        <StyledButtonTransparent onClick={handleClick}>
          <img
            src={process.env.PUBLIC_URL + "/assets/generate-hot-take.svg"}
            alt="generate new hot take icon"
            width="36px"
            height="36px"
          />
          <StyledMetaText>Refresh Hot Take</StyledMetaText>
        </StyledButtonTransparent>
      </StyledMenuBarContentMiddle>
      <VerticalDivider />
      <StyledMenuBarContentRight>
        <StyledBodyText>{hotTake}</StyledBodyText>
      </StyledMenuBarContentRight>
    </StyledMenuBarContainer>
  );
};