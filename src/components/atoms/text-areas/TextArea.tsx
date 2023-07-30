import { FC } from "react";
import { ITextArea } from "./text-areas.types";

export const TextArea: FC<ITextArea> = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  ...rest
}) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      {...rest}
    />
  );
};
