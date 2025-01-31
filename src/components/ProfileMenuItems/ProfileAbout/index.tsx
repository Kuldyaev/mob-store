import { FC } from "react";
import ProfileMenuItemHeader from "@/components/ProfileMenuItemHeader";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfileAboutProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileAbout: FC<ProfileAboutProps> = ({ title, onClickBack }) => {
  return (
    <>
      <ProfileMenuItemHeader title={title} onClickBack={onClickBack} />
      <div className={cn(s.profileAbout, "flex-column-start-center")}>
        <div className={s.empty}>{}</div>
        <div className={s.empty}>{}</div>
        <div className={s.empty}>{}</div>
      </div>
    </>
  );
};

export default ProfileAbout;
