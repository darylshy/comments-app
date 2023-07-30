export interface IIConButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
}

export interface IIconSVG {
  src: string;
  alt: string;
}
