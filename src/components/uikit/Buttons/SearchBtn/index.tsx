import { FC } from "react";
import { SeacrhIconBlue } from "@/features/Icons";
import s from "./style.module.scss";

interface SearchBtnProps {
  onClick?: () => void;
}

export const SearchBtn: FC<SearchBtnProps> = ({ onClick }) => {
  return (
    <button
      className={s.searchBtn}
      onClick={onClick}
      style={{ backgroundColor: "white" }}
    >
      <SeacrhIconBlue />
    </button>
  );
};
