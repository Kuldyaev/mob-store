import { FC, ReactNode } from "react";
import s from "./../style.module.scss";

interface ParagrafProps {
  children: ReactNode | string;
}

export const Paragraph3: FC<ParagrafProps> = ({ children }) => {
  return <h3 className={s.paragraf3}>{children}</h3>;
};
