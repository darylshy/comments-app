export interface IDivider {
  $direction: "vertical" | "horizontal";
  $thickness: number | string;
  $length: number | string;
  $color?: string;
  $spacing: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}
