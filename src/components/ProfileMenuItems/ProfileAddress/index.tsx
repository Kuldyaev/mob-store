import { FC } from "react";
import { dispatch, useSelector } from "@/store";
import { changeDeliveryAddress } from "@/store/slices/address";
import {
  Typograph_19,
  Typograph_14_5,
  Typograph_12_5,
  Button,
  CheckBox,
} from "@/components/uikit";
import { PlusIcon, ArrowToRight } from "@/features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

interface ProfileAddressProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileAddress: FC<ProfileAddressProps> = ({ title }) => {
  const addresses = useSelector((state) => state.address.address);

  return (
    <div className={cn(s.adresses, "flex-column-between-start")}>
      <div className={cn(s.adressesTopText, "flex-column-start-start")}>
        <div className={cn(s.header, "flex-row-between-center")}>
          <Typograph_19 fw="fw700" spacing={-1}>
            {title}
          </Typograph_19>
          <div className={cn(s.addAdressBtn, "flex-row-between-center")}>
            <PlusIcon />
            <h5>Новый адрес</h5>
          </div>
        </div>
        <div className={cn(s.body, "flex-column-start-start")}>
          {addresses.map((item) => (
            <div
              className={cn(s.address, "flex-row-between-center")}
              key={item.id}
            >
              <div className={cn(s.adressesLeft, "flex-row-start-center")}>
                <div
                  className={cn(s.adressesLogoPlace, "flex-row-center-center")}
                >
                  <img
                    src={
                      item.type === "point"
                        ? "images/cdek.png"
                        : "images/courier.png"
                    }
                    alt="sdek"
                    className={
                      item.type === "point" ? s.pointImg : s.courierImg
                    }
                  />
                </div>
                <div
                  className={cn(
                    s.adressesInfoPlace,
                    "flex-column-center-start"
                  )}
                >
                  <Typograph_14_5>
                    Москва, проспект Андропова, 26
                  </Typograph_14_5>
                  <Typograph_12_5 color="grey-second">
                    {item.type === "point" ? "Пункт выдачи " : "Курьер "}
                    &middot;{" "}
                    <span className={s.editAddress}>Редактировать </span>
                    <ArrowToRight />
                  </Typograph_12_5>
                </div>
              </div>

              <div
                className={cn(s.adressesCheckBoxPlace, "flex-row-end-center")}
              >
                <CheckBox
                  checked={item.checked}
                  onChange={() => dispatch(changeDeliveryAddress(item.id))}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(s.adressesBtn, "flex-column-start-center")}>
        <Button label="Доставить сюда" />
      </div>
    </div>
  );
};

export default ProfileAddress;
