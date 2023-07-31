import { FC } from "react";
import { formatDate } from "../../../utils";
import { StyledDivider, StyledTextSm, StyledTextXs } from "../../atoms";
import { DeleteIcon } from "../../atoms/icons/DeleteIcon";
import { PersonIcon } from "../../atoms/icons/PersonIcon";
import { IconButton } from "../../molecules";
import { IComment } from "./comment.types";

export const Comment: FC<IComment> = ({ name, created, message, id }) => {
  return (
    <div data-id={id}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PersonIcon />
        <StyledTextSm style={{ margin: "0 10px", color: "#787889" }}>
          {name}
        </StyledTextSm>
        <StyledTextSm style={{ marginRight: "10px", color: "#787889" }}>
          {message}
        </StyledTextSm>
        <StyledDivider
          $direction="horizontal"
          $thickness={1}
          $length={10}
          $spacing={{ top: 0, right: 5, bottom: 0, left: 5 }}
        />
        <StyledTextXs style={{ color: "#787889", marginRight: "20px" }}>
          {formatDate(created)}
        </StyledTextXs>
        <IconButton onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </div>
      <StyledDivider
        $direction="horizontal"
        $thickness={2}
        $length="100%"
        $spacing={{ top: 0, right: 0, bottom: 10, left: 0 }}
      />
    </div>
  );
};
