import { FC } from "react";
import { BackIcon } from "@/features/Icons";
import s from "./style.module.scss";

interface BackBtnProps {
  onClick?: () => void;
}

export const BackBtn: FC<BackBtnProps> = ({ onClick }) => {
  return (
    <button
      className={s.backBtn}
      onClick={onClick}
      style={{ backgroundColor: "white" }}
    >
      <BackIcon />
    </button>
  );
};
