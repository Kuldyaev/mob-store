import { FC } from "react";
import ProfileMenuItemHeader from "@/components/ProfileMenuItemHeader";
import { Button } from "@/components/uikit";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfileContactsProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileContacts: FC<ProfileContactsProps> = ({ title, onClickBack }) => {
  return (
    <>
      <ProfileMenuItemHeader title={title} onClickBack={onClickBack} />
      <div className={cn(s.profileContacts, "flex-column-start-center")}>
        <Button label="Перейти в Telegram" />
      </div>
    </>
  );
};

export default ProfileContacts;
