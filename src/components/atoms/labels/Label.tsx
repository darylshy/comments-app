import { FC, PropsWithChildren } from "react";
import { StyledBodyText } from "../typography/Typography.styles";
import { ILabels } from "./labels.types";

export const Label: FC<PropsWithChildren<ILabels>> = ({
  htmlFor,
  labelText,
  ...rest
}) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      <StyledBodyText>{labelText}</StyledBodyText>
    </label>
  );
};
