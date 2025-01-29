import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_11_5: FC<TypographType> = ({
  children,
  fw = "fw400",
  color = "black",
  spacing = -1,
}) => {
  return (
    <h3
      className={cn(s.typograph_11_5, fw, color)}
      style={{
        letterSpacing:
          spacing !== null
            ? "calc(" + spacing + "* min(0.14px, 0.029vw)"
            : "none",
      }}
    >
      {children}
    </h3>
  );
};
