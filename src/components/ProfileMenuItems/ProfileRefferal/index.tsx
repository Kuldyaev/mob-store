import { FC } from "react";
import { Typograph_19, Typograph_12_5, Button } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

interface ProfileRefferalProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileRefferal: FC<ProfileRefferalProps> = ({ title }) => {
  return (
    <div className={cn(s.refferal, "flex-column-between-start")}>
      <div className={cn(s.refferalTopText, "flex-column-start-start")}>
        <Typograph_19 fw="fw700" spacing={-1}>
          {title}
        </Typograph_19>
        <Typograph_12_5 color="grey-second">
          Пригласите друга на наш сайт и поделитесь промокодом на скидку 500₽.
          За его первый заказ мы подарим скидку 500₽ и вам.
        </Typograph_12_5>
      </div>
      <div className={cn(s.refferalBtn, "flex-column-start-center")}>
        <Button label="Поделиться" />
      </div>
    </div>
  );
};

export default ProfileRefferal;
