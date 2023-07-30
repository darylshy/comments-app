import { FC } from "react";
import { IInput } from "./input.types";

export const Input: FC<IInput> = ({ type, id, name, placeholder, ...rest }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};
