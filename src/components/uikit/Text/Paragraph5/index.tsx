import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph5_b: FC<ParagrafProps> = ({ children }) => {
  return <h2 className={s.paragraf5_b}>{children}</h2>;
};

export const Paragraph5_g: FC<ParagrafProps> = ({ children }) => {
  return <h2 className={s.paragraf5_g}>{children}</h2>;
};
