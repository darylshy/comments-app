import { MouseEventHandler } from "react";

export interface IButton {
  buttonText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
