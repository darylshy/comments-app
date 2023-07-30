import { FC } from "react";
import { IIconSVG } from "./icons.types";

export const IconSVG: FC<IIconSVG> = ({
  fill,
  xmlns,
  height,
  viewBox,
  width,
  path,
}) => {
  return (
    <svg
      fill={fill}
      xmlns={xmlns}
      height={height}
      viewBox={viewBox}
      width={width}
    >
      <path d={path} />
    </svg>
  );
};
