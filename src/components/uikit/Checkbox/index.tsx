import { FC } from "react";
import s from "./style.module.scss";

interface CheckBoxProps {
  checked: boolean;
  onChange: (x: boolean) => void;
}

export const CheckBox: FC<CheckBoxProps> = ({ checked = false, onChange }) => {
  return (
    <label className={s.checkboxcontainer}>
      <input
        type="checkbox"
        checked={checked}
        onClick={() => onChange(!checked)}
      />
      <span className={s.checkmark}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.876 1.22022C10.1099 0.851444 10.0032 0.361161 9.6378 0.125141C9.27238 -0.110876 8.78656 -0.00325367 8.55269 0.365524L3.7421 7.95109L1.39357 5.05431C1.11884 4.71544 0.623922 4.6655 0.288137 4.94275C-0.0476457 5.22001 -0.0971385 5.71947 0.177594 6.05834L3.0985 9.66112C3.49274 10.1474 4.24256 10.1033 4.57817 9.57411L9.876 1.22022Z"
            fill="white"
          />
        </svg>
      </span>
    </label>
  );
};
