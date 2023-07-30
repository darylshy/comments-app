import { FC } from "react";
import { IImage } from "./images.types";

//TODO: Make a generic image that uses styled-component for bespoke styles
export const SiteLogoImage: FC<IImage> = ({ src, alt, height, width }) => (
  <img src={src} alt={alt} height={height} width={width} />
);
