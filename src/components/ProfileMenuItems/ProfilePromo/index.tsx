import { FC, useState } from "react";
import ProfileMenuItemHeader from "@/components/ProfileMenuItemHeader";
import {
  Button,
  ToggleSwitch,
  Typograph_14_5,
  Typograph_11_5,
} from "@/components/uikit";
import { DiscountIcon } from "@/features/Icons";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfilePromoProps {
  title: string;
  onClickBack?: () => void;
}

const ProfilePromo: FC<ProfilePromoProps> = ({ title, onClickBack }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checked1, setChecked1] = useState<boolean>(false);

  return (
    <>
      <ProfileMenuItemHeader title={title} onClickBack={onClickBack} />
      <div className={cn(s.profilePromo, "flex-column-start-center")}>
        <div className={cn(s.promoItem, "flex-column-start-center")}>
          <div className={cn(s.topPromoItem, "flex-row-end-center")}>
            <div className={cn(s.symbolPlace)}>
              <DiscountIcon />
            </div>
            <div className={cn(s.promoText, "flex-column-start-start")}>
              <Typograph_14_5 spacing={-2}>Скидка 500₽</Typograph_14_5>
              <Typograph_11_5 spacing={-2} color="grey-second">
                Действует при заказе 3 товаров из категории одежда, например:
                брюки
              </Typograph_11_5>
            </div>
            <div className={cn(s.switchPlace)}>
              <ToggleSwitch
                checked={checked}
                changeValue={(x) => {
                  console.log(x);
                  setChecked(x);
                }}
              />
            </div>
          </div>
          <Button label="Выбрать товары" fontSize="14_5" />
        </div>

        <div className={cn(s.promoItem, "flex-column-start-center")}>
          <div className={cn(s.topPromoItem, "flex-row-end-center")}>
            <div className={cn(s.symbolPlace)}>
              <DiscountIcon />
            </div>
            <div className={cn(s.promoText, "flex-column-start-start")}>
              <Typograph_14_5 spacing={-2}>Скидка 500₽</Typograph_14_5>
              <Typograph_11_5 spacing={-2} color="grey-second">
                Действует при заказе 3 товаров из категории одежда, например:
                брюки
              </Typograph_11_5>
            </div>
            <div className={cn(s.switchPlace)}>
              <ToggleSwitch
                checked={checked1}
                changeValue={(x) => {
                  console.log(x);
                  setChecked1(x);
                }}
              />
            </div>
          </div>
          <Button label="Выбрать товары" fontSize="14_5" />
        </div>
      </div>
    </>
  );
};

export default ProfilePromo;
