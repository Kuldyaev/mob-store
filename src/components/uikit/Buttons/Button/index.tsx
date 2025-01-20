import { FC } from "react";

import s from "./style.module.scss";

interface ButtonProps {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className={s.btn}
      onClick={onClick}
      style={{ backgroundColor: "white" }}
    >
      ewfwe
    </button>
  );
};
