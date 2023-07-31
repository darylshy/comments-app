export interface IIConButton {
  buttonText?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export interface IIconSVG {
  src: string;
  alt: string;
}
