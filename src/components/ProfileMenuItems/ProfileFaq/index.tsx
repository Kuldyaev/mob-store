import { FC } from "react";
import { Paragraph9, BackBtn } from "@/components/uikit";
import s from "./style.module.scss";

interface ProfileFaqProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileFaq: FC<ProfileFaqProps> = ({ title, onClickBack }) => {
  return (
    <div className={s.profileBrands}>
      <div className={s.profileBrandsHeader}>
        <BackBtn onClick={onClickBack} />
        <Paragraph9>{title}</Paragraph9>
        <div>{}</div>
      </div>

      <div className={s.ProfileSettingsBody}>ProfileFaq</div>
    </div>
  );
};

export default ProfileFaq;
