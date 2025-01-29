import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_24: FC<TypographType> = ({
  children,
  fw = "fw700",
  color = "black",
  spacing = null,
}) => {
  return (
    <h1
      className={cn(s.typograph_24, fw, color)}
      style={{ letterSpacing: spacing ? "12px" : "none" }}
    >
      {children}
    </h1>
  );
};
