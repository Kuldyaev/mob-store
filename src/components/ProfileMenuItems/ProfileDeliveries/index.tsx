import { FC } from "react";
import {
  Paragraph9,
  BackBtn,
  ContextMenuBtn,
  Paragraph4,
  Paragraph5_g,
} from "@/components/uikit";
import s from "./style.module.scss";

interface ProfileDeliveriesProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileDeliveries: FC<ProfileDeliveriesProps> = ({
  title,
  onClickBack,
}) => {
  return (
    <div className={s.profileDeliveries}>
      <div className={s.header}>
        <BackBtn onClick={onClickBack} />
        <Paragraph9>{title}</Paragraph9>
        <div>{}</div>
      </div>

      <div className={s.body}>
        <div className={s.deliveryCard}>bfdb</div>
        <div className={s.deliveryCard}>rgerg</div>
      </div>
    </div>
  );
};

export default ProfileDeliveries;
