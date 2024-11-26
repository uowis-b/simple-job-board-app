import type { Theme } from "@mui/material/styles";
import { SystemStyleObject } from "@mui/system";

export type StyleObj =
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>);

export type Styles = Record<string, StyleObj>;
