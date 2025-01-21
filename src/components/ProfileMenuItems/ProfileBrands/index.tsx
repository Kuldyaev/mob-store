import { FC } from "react";
import {
  Paragraph9,
  BackBtn,
  ContextMenuBtn,
  Paragraph4,
  Paragraph5_g,
} from "@/components/uikit";
import s from "./style.module.scss";

interface ProfileBrandsProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileBrands: FC<ProfileBrandsProps> = ({ title, onClickBack }) => {
  return (
    <div className={s.profileBrands}>
      <div className={s.profileBrandsHeader}>
        <BackBtn onClick={onClickBack} />
        <Paragraph9>{title}</Paragraph9>
        <div>{}</div>
      </div>

      <div className={s.profileBrandsBody}>
        <div className={s.subscribeItem}>
          <div className={s.subscribeItemInfo}>
            <div
              className={s.subscribeItemImg}
              style={{
                backgroundImage: "url('images/" + "brandNike" + ".png')",
              }}
            ></div>
            <div className={s.subscribeItemTexts}>
              <Paragraph4>Nike</Paragraph4>
              <Paragraph5_g>2 478 товаров</Paragraph5_g>
            </div>
          </div>
          <ContextMenuBtn />
        </div>

        <div className={s.subscribeItem}>
          <div className={s.subscribeItemInfo}>
            <div
              className={s.subscribeItemImg}
              style={{
                backgroundImage: "url('images/" + "brandNike" + ".png')",
              }}
            ></div>
            <div className={s.subscribeItemTexts}>
              <Paragraph4>Nike</Paragraph4>
              <Paragraph5_g>2 478 товаров</Paragraph5_g>
            </div>
          </div>
          <ContextMenuBtn />
        </div>
      </div>
    </div>
  );
};

export default ProfileBrands;
