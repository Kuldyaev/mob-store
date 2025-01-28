import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph11: FC<ParagrafProps> = ({ children }) => {
  return <h6 className={s.paragraf11}>{children}</h6>;
};
