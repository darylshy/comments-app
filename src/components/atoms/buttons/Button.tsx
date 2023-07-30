import { FC, PropsWithChildren } from "react";
import { IButton } from "./buttons.types";

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};
