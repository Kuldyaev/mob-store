import { FC } from "react";
import { TrashCanIcon } from "./../../../../features/Icons";
import s from "./style.module.scss";

interface DeleteBtnProps {
  onClick?: () => void;
}

export const DeleteBtn: FC<DeleteBtnProps> = ({ onClick }) => {
  return (
    <button
      className={s.deleteBtn}
      onClick={onClick}
      style={{ backgroundColor: "white" }}
    >
      <TrashCanIcon />
    </button>
  );
};
