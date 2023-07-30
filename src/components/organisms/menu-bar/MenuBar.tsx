import { FC, useCallback } from "react";
import {
  HotTakeBodyText,
  StyledDivider,
  StyledMenuBarLogoText,
  StyledMetaText,
  StyledSiteLogoImage,
  StyledSpinner,
} from "../../atoms";
import { IconButton } from "../../molecules";
import {
  StyledMenuBarContainer,
  StyledMenuBarContentLeft,
  StyledMenuBarContentMiddle,
  StyledMenuBarContentRight,
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
      <StyledSiteLogoImage
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
      <StyledDivider
        $direction="vertical"
        $thickness={1}
        $length={90}
        $spacing={{
          left: 139,
          right: 15,
        }}
      />
      <StyledMenuBarContentMiddle>
        <IconButton onClick={handleClick}>Refresh Hot Take</IconButton>
      </StyledMenuBarContentMiddle>
      <StyledDivider
        $direction="vertical"
        $thickness={1}
        $length={90}
        $spacing={{
          left: 15,
          right: 15,
        }}
      />
      <StyledMenuBarContentRight>
        {isLoading ? (
          <StyledSpinner />
        ) : (
          <HotTakeBodyText>{hotTake}</HotTakeBodyText>
        )}
      </StyledMenuBarContentRight>
    </StyledMenuBarContainer>
  );
};
