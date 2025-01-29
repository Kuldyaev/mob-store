import { ReactNode } from "react";

export interface TypographType {
  children: ReactNode | string;
  fw?:
    | "fw100"
    | "fw200"
    | "fw300"
    | "fw400"
    | "fw500"
    | "fw600"
    | "fw700"
    | "fw800"
    | "fw900";
  color?:
    | "black"
    | "super-black"
    | "white"
    | "orange"
    | "grey"
    | "grey-second"
    | "red"
    | "blue";
  spacing?: 5 | 4 | -3 | -2 | -1 | 1 | 2 | 3 | 4 | 5 | null;
}
