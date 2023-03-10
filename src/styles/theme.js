import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: `"Ubuntu", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
  Helvetica Neue, sans-serif;`,
  heading: `"Ubuntu", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
  Helvetica Neue, sans-serif;`,
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
};

const overrides = {
  ...chakraTheme,
  config,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  colors: {
    primary: "#01061A",
    secondary: "#1396A8",
    tertiary: "#FFF",
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
