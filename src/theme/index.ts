"use client";

import { createTheme } from "@mui/material/styles";
import { League_Spartan } from "next/font/google";

const font = League_Spartan({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    htmlFontSize: 15,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "hsl(180, 29%, 50%)",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "hsl(180, 31%, 95%)",
      contrastText: "hsl(180, 29%, 50%)",
    },
    info: {
      main: "hsl(180, 14%, 20%)",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "hsl(180, 52%, 96%)",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "hsl(180, 8%, 52%)",
    },
    divider: "hsl(180, 8%, 52%)",
  },
});

export default theme;
