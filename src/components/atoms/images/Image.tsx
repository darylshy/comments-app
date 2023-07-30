import { FC } from "react";
import { IImage } from "./images.types";

export const Image: FC<IImage> = ({ src, alt, height, width }) => {
  return <img src={src} alt={alt} height={height} width={width}></img>;
};
