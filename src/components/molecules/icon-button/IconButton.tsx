import { FC, PropsWithChildren } from "react";
import { StyledMetaTextGrey, StyledRefreshHotTakeIcon } from "../../atoms";
import { IIConButton } from "./icon-button.types";
import { StyledRefreshHotTakeButton } from "./IconButton.styles";

export const IconButton: FC<PropsWithChildren<IIConButton>> = ({
  onClick,
  children,
}) => {
  return (
    <StyledRefreshHotTakeButton onClick={onClick}>
      <StyledRefreshHotTakeIcon
        fill="#fdb026"
        xmlns="http://www.w3.org/2000/svg"
        height="42"
        viewBox="0 -960 960 960"
        width="42"
        path="M490.74-349Q557-349 603-391.078T649-493q0-52-33.58-89T534-619q-42 0-72 27.5t-30 66.611Q432-508 438.5-492q6.5 16 19.5 30l44-42q-5-3.5-7.5-8.75T492-524q0-14 11-24t31-10q23 0 39.5 18.5T590-492q0 35.189-28 59.595Q534-408 492-408q-51.196 0-86.598-40.5T370-548.583Q370-580 381.5-608t33.5-50l-43-43q-30 29-46.5 68.284-16.5 39.283-16.5 82.4Q309-466 362.008-407.5 415.015-349 490.74-349ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.625 42.375T700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.417 26.324 122.392Q232.649-342.092 281-297l19 18v199h-60Zm257-370Z"
      />
      <StyledMetaTextGrey>{children}</StyledMetaTextGrey>
    </StyledRefreshHotTakeButton>
  );
};
