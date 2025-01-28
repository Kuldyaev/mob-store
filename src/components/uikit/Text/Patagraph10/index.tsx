import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph10: FC<ParagrafProps> = ({ children }) => {
  return <h5 className={s.paragraf10}>{children}</h5>;
};
