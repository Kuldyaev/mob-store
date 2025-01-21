import { FC } from "react";
import { ContextMenuIcon } from "@/features/Icons";
import s from "./style.module.scss";

interface ContextMenuBtnProps {
  onClick?: () => void;
}

export const ContextMenuBtn: FC<ContextMenuBtnProps> = ({ onClick }) => {
  return (
    <button
      className={s.contextMenuBtn}
      onClick={onClick}
      style={{ backgroundColor: "white" }}
    >
      <ContextMenuIcon />
    </button>
  );
};
