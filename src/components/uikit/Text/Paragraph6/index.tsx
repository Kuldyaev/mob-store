import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph6: FC<ParagrafProps> = ({ children }) => {
  return <h2 className={s.paragraf6}>{children}</h2>;
};
