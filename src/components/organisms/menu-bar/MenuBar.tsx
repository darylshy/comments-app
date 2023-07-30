import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { useHotTakeGenerator } from "../../../hooks/use-hot-take-generator";
import {
  StyledDivider,
  StyledHTBodyText,
  StyledMenuBarLogoText,
  StyledMetaTextGrey,
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

/**
 * TODO: Show error message when hot take cannot be fetched [React Error Boundary? vs Axios Error Catching?]
 * TODO: Make Menubar sticky
 * TODO: Move image to a component instead of hard coding it into the menu bar
 *
 */

export const MenuBar: FC<PropsWithChildren> = () => {
  const { generateHotTake } = useHotTakeGenerator();
  const [hotTake, setHotTake] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchHotTake = useCallback(async () => {
    setIsLoading(true);
    const _hotTake = await generateHotTake();
    setHotTake(_hotTake?.data);
    setIsLoading(false);
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [generateHotTake, initialLoad]);

  useEffect(() => {
    if (initialLoad) {
      fetchHotTake();
    }
  }, [fetchHotTake, initialLoad]);

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
        <StyledMetaTextGrey>
          AI Generated Hot Takes, powered by OpenAI&copy;
        </StyledMetaTextGrey>
      </StyledMenuBarContentLeft>
      <StyledDivider
        $direction="vertical"
        $thickness={2}
        $length={90}
        $spacing={{
          left: 138,
          right: 15,
        }}
      />
      <StyledMenuBarContentMiddle>
        <IconButton onClick={fetchHotTake}>Refresh Hot Take</IconButton>
      </StyledMenuBarContentMiddle>
      <StyledDivider
        $direction="vertical"
        $thickness={2}
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
          <StyledHTBodyText>{hotTake}</StyledHTBodyText>
        )}
      </StyledMenuBarContentRight>
    </StyledMenuBarContainer>
  );
};
