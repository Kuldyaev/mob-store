import { FC } from "react";
import ProfileMenuItemHeader from "@/components/ProfileMenuItemHeader";
import { Button } from "@/components/uikit";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfilePromoProps {
  title: string;
  onClickBack?: () => void;
}

const ProfilePromo: FC<ProfilePromoProps> = ({ title, onClickBack }) => {
  return (
    <>
      <ProfileMenuItemHeader title={title} onClickBack={onClickBack} />
      <div className={cn(s.profilePromo, "flex-column-start-center")}>
        <div className={s.promoItem}>
          <Button label="Выбрать товары" />
        </div>
        <div className={s.promoItem}></div>
      </div>
    </>
  );
};

export default ProfilePromo;
