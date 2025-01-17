import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph7: FC<ParagrafProps> = ({ children }) => {
  return <h3 className={s.paragraf7}>{children}</h3>;
};
