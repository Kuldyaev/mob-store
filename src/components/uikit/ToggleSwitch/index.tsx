import { FC } from "react";
import cn from "classnames";
import s from "./style.module.scss";

interface ToggleSwitchProps {
  checked: boolean;
  changeValue: (x: boolean) => void;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked = false,
  changeValue,
}) => {
  // const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={cn(s.toggleSwitch, checked ? s.on : s.off)}
      onClick={() => changeValue(!checked)}
    >
      <div className={cn(s.switch, checked ? s.switchOn : s.switchOff)}></div>
    </div>
  );
};

export default ToggleSwitch;
