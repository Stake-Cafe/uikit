import { Colors } from "./types";

export const baseColors = {
  failure: "#ed4a4a",
  primary: "#a5875f",
  primaryBright: "#c2ad92",
  primaryDark: "#785b3a",
  secondary: "#E9D739", //D9BB45
  success: "#31D0AA",
  warning: "#ff9d00",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#efedeb",
  contrast: "#131a25",
  invertedContrast: "#FFFFFF",
  input: "#f4f0eb",
  tertiary: "#f5f2ef",
  text: "#623b1e",
  textDisabled: "#c3c0bb",
  textSubtle: "#9f8156",
  borderColor: "#f7eede",
  card: "#ebe6e0",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff1e5 0%, #fffff0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#23211F",
  contrast: "#FFFFFF",
  invertedContrast: "#131a25",
  input: "#5a4e3f",
  primaryDark: "#785b3a",
  tertiary: "#534128",
  text: "#fcf1e3",
  textDisabled: "#716a60",
  textSubtle: "#d4cdc4",
  borderColor: "#695f4f",
  card: "#46330c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5d4232 0%, #4d4500 100%)",
  },
};
