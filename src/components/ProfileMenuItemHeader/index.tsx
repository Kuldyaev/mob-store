import { FC } from "react";
import { SearchIcon } from "@/features/Icons";
import { Typograph_15_5, BackBtn } from "@/components/uikit";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfileSettingsProps {
  title: string;
  onClickBack?: () => void;
  isSearchEnabled?: boolean;
}

const ProfileMenuItemHeader: FC<ProfileSettingsProps> = ({
  title,
  onClickBack,
  isSearchEnabled = false,
}) => {
  return (
    <div className={s.profileItemHeader}>
      <div className={cn(s.left, "flex-row-start-center")}>
        <BackBtn onClick={onClickBack} />
      </div>
      <div className={s.center}>
        <Typograph_15_5 fw="fw600" spacing={-2}>
          {title}
        </Typograph_15_5>
      </div>

      <div className={cn(s.right, "flex-row-end-center")}>
        {isSearchEnabled && <SearchIcon />}
        {}
      </div>
    </div>
  );
};

export default ProfileMenuItemHeader;
