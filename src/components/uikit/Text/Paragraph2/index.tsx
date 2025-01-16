import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph2: FC<ParagrafProps> = ({ children }) => {
  return <h1 className={s.paragraf2}>{children}</h1>;
};
