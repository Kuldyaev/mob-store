import s from "./style.module.scss";
import cn from "classnames";
import "./button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  version?: "primary" | "secondary" | "warning" | "disabled" | "tocart";
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large" | "full";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;

  fontSize?: "15_5" | "14_5";
}

/** Primary UI component for user interaction */
export const Button = ({
  version = "primary",
  size = "full",
  backgroundColor,
  label,
  fontSize = "15_5",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        s.button,
        `btn--${version}`,
        `btn--${size}`,
        `btn--${fontSize}`
      )}
      style={{ backgroundColor }}
      {...props}
    >
      <h5>{label}</h5>
    </button>
  );
};
