import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_9: FC<TypographType> = ({
  children,
  fw = "fw500",
  color = "grey-second",
  spacing = 2,
}) => {
  return (
    <h3
      className={cn(s.typograph_9, fw, color)}
      style={{
        letterSpacing:
          spacing !== null
            ? "calc(" + spacing + "* min(0.11px, 0.023vw)"
            : "none",
      }}
    >
      {children}
    </h3>
  );
};
