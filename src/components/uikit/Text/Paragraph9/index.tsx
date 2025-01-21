import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph9: FC<ParagrafProps> = ({ children }) => {
  return <h3 className={s.paragraf9}>{children}</h3>;
};
