import { FC } from "react";
import { StyledLabel } from "../../atoms";
import { CommentButton } from "../../molecules/comment-button/CommentButton";
import {
  StyledMainContainer,
  StyledMainLeft,
  StyledMainRight,
} from "./Main.styles";
import { StyledInput } from "../../atoms/inputs/Inputs.styles";
import { StyledTextArea } from "../../atoms/text-areas/TextAreas.styles";

export const Main: FC = (props) => {
  return (
    <StyledMainContainer>
      <StyledMainLeft>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledLabel htmlFor="name" labelText="Name:" />
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <StyledLabel htmlFor="name" labelText="Comment:" />
          <StyledTextArea
            id="story"
            name="story"
            rows={5}
            cols={33}
            placeholder="Write something here"
          />
          <CommentButton />
        </div>
      </StyledMainLeft>
      <StyledMainRight></StyledMainRight>
    </StyledMainContainer>
  );
};
