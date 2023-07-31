import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const appTheme = {
  fontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.35rem",
    lg: "2rem",
    xl: "2.5rem",
    xxl: "3rem",
  },
  colors: {
    flameLight: "#fdb026",
    flameMedium: "#d37c20",
    flameDark: "#fe421b",
    whiteLight: "#fff",
    whiteDark: "#f3f2ef",
    greyLight: "#d2d2d2",
    greyDark: "#787889",
  },
  stackVerticalCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stackVerticalDeadCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stackVerticalMiddle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

type Theme = {
  [key: string]: string;
};

const camelToKebab = (string: string): string => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

export const themeExtractor = (theme: Theme): string => {
  const themeArray = Object.entries(theme);
  return themeArray.reduce((acc, [key, value]) => {
    const kebabCaseKey = camelToKebab(key);
    acc += `${kebabCaseKey}:${value};`;
    return acc;
  }, "");
};

export const AppTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
);
