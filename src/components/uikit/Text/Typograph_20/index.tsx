import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_20: FC<TypographType> = ({
  children,
  fw = "fw700",
  color = "black",
  spacing = -1,
}) => {
  return (
    <h1
      className={cn(s.typograph_20, fw, color)}
      style={{
        letterSpacing:
          spacing !== null
            ? "calc(" + spacing + "* min(0.24px, 0.051vw)"
            : "none",
      }}
    >
      {children}
    </h1>
  );
};
