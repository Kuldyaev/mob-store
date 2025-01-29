import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_12_5: FC<TypographType> = ({
  children,
  fw = "fw400",
  color = "black",
  spacing = -1,
}) => {
  return (
    <h3
      className={cn(s.typograph_12_5, fw, color)}
      style={{
        letterSpacing:
          spacing !== null
            ? "calc(" + spacing + "* min(0.15px, 0.032vw)"
            : "none",
      }}
    >
      {children}
    </h3>
  );
};
