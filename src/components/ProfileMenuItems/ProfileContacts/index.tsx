import { FC } from "react";
import { Typograph_19, Button } from "@/components/uikit";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfileContactsProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileContacts: FC<ProfileContactsProps> = ({ title }) => {
  return (
    <div className={cn(s.contacts, "flex-column-between-start")}>
      <Typograph_19 fw="fw700" spacing={-1}>
        {title}
      </Typograph_19>
      <div className={cn(s.profileContacts, "flex-column-start-center")}>
        <Button label="Перейти в Telegram" />
      </div>
    </div>
  );
};

export default ProfileContacts;
