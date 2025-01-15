import { FC } from "react";
import { TrashCanIcon } from "./../../../../features/Icons";
import s from "./style.module.scss";

interface DeleteBtnProps {
  deleteItem: () => void;
}

export const DeleteBtn: FC<DeleteBtnProps> = ({ deleteItem }) => {
  return (
    <button
      className={s.deleteBtn}
      onClick={deleteItem}
      style={{ backgroundColor: "white" }}
    >
      <TrashCanIcon />
    </button>
  );
};
