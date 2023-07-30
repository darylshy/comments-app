import styled from "styled-components";
import { IDivider } from "./dividers.types";

export const StyledDivider = styled.div<IDivider>`
  width: ${({ $direction, $thickness, $length }) => {
    const shape = $direction === "vertical" ? $thickness : $length;
    return Number.isInteger(shape) ? shape + "px;" : shape;
  }};
  height: ${({ $direction, $thickness, $length }) => {
    const shape = $direction === "vertical" ? $length : $thickness;
    return Number.isInteger(shape) ? shape + "px;" : shape;
  }};
  background: ${({ theme, $color }) =>
    $color ? $color : theme.colors.greyLight};
  margin: ${({ $spacing: { top, right, bottom, left } }) =>
    `${top ?? 0}px ${right ?? 0}px ${bottom ?? 0}px ${left ?? 0}px`};
  align-self: center;
`;
