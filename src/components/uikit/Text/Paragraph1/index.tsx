import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph1: FC<ParagrafProps> = ({ children }) => {
  return <h1 className={s.paragraf1}>{children}</h1>;
};
