import { FC } from "react";
import { TypographType } from "@/shared/types/typograf";
import cn from "classnames";
import s from "./../style.module.scss";
import "@/scss/style.scss";

export const Typograph_15_5: FC<TypographType> = ({
  children,
  fw = "fw600",
  color = "black",
  spacing = -3,
}) => {
  return (
    <h1
      className={cn(s.typograph_15_5, fw, color)}
      style={{
        letterSpacing:
          spacing !== null
            ? "calc(" + spacing + "* min(0.19px, 0.039vw)"
            : "none",
      }}
    >
      {children}
    </h1>
  );
};
