import type { BreakpointOverrides as MuiBreakpointOverrides } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides extends MuiBreakpointOverrides {
    // removes the original breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // simplify breakpoints
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
