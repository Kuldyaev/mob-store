import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph12: FC<ParagrafProps> = ({ children }) => {
  return <h5 className={s.paragraf12}>{children}</h5>;
};
