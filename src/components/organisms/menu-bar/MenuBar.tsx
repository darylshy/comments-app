import { FC, useCallback } from "react";
import {
  SiteLogoImage,
  Spinner,
  StyledBodyText,
  StyledMenuBarLogoText,
  StyledMetaText,
} from "../../atoms";
import { IconButton } from "../../molecules";
import {
  StyledMenuBarContainer,
  StyledMenuBarContentLeft,
  StyledMenuBarContentMiddle,
  StyledMenuBarContentRight,
  VerticalDivider,
} from "./MenuBar.styles";
import { IMenuBar } from "./menu-bar.types";

/**
 * TODO: Show error message when hot take cannot be fetched [React Error Boundary? vs Axios Error Catching?]
 * TODO: Make Menubar sticky
 * TODO: Move image to a component instead of hard coding it into the menu bar
 *
 */

export const MenuBar: FC<IMenuBar> = ({
  hotTake,
  isLoading,
  refreshHotTake,
}) => {
  const handleClick = useCallback(async () => {
    await refreshHotTake();
  }, [refreshHotTake]);

  return (
    <StyledMenuBarContainer>
      <SiteLogoImage
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
        <IconButton onClick={handleClick}>Refresh Hot Take</IconButton>
      </StyledMenuBarContentMiddle>
      <VerticalDivider />
      <StyledMenuBarContentRight>
        {isLoading ? <Spinner /> : <StyledBodyText>{hotTake}</StyledBodyText>}
      </StyledMenuBarContentRight>
    </StyledMenuBarContainer>
  );
};
