import { FC } from "react";
import { ArrowToRight, CameraIcon } from "@/features/Icons";
import ProfileMenuItemHeader from "@/components/ProfileMenuItemHeader";
import {
  Typograph_15_5,
  Typograph_11_5,
  Typograph_14_5,
} from "@/components/uikit";

import { Button } from "@/components/uikit";
import s from "./style.module.scss";
import cn from "classnames";

interface ProfileSettingsProps {
  title: string;
  onClickBack?: () => void;
}

const data1 = [
  {
    id: 1,
    title: "Телефон",
    value: "+7 977 462-48-35",
  },
  {
    id: 2,
    title: "Почта",
    value: "sarapovaleksandr7@gmail.com",
  },
  {
    id: 3,
    title: "Дата рождения",
    value: "12.10.2003",
  },
  {
    id: 4,
    title: "Пол",
    value: "Мужской",
  },
];

const data2 = [
  {
    id: 1,
    title: "Интересы",
    value: "Спорт, Музыка, Автомобили",
  },
  {
    id: 2,
    title: "Предпочитаемые размеры",
    value: "XXL",
  },
  {
    id: 3,
    title: null,
    value: "Мои реквизиты ",
  },
  {
    id: 4,
    title: null,
    value: "Опрос от команды Itemcloud",
  },
  {
    id: 5,
    title: null,
    value: "Другое",
  },
];

const ProfileSettings: FC<ProfileSettingsProps> = ({ title, onClickBack }) => {
  return (
    <div className={s.profileSettings}>
      <ProfileMenuItemHeader title={title} onClickBack={onClickBack} />
      <div className={cn(s.topBlock, "flex-column-start-center")}>
        <div
          className={cn(s.ava, "flex-column-center-center")}
          style={{
            backgroundImage: "url('images/avaExample.jpeg')",
          }}
        >
          <CameraIcon />
        </div>
        <div className={cn(s.downloadAva, "flex-column-center-center")}>
          <Typograph_15_5 color="blue" spacing={-2} fw="fw400">
            Изменить фото
          </Typograph_15_5>
        </div>
        <div className={cn(s.name, "flex-row-between-center")}>
          <div className={cn(s.infoBlock, "flex-column-start-start")}>
            <Typograph_11_5 color="grey-second" spacing={-1} fw="fw400">
              Фамилия и Имя
            </Typograph_11_5>
            <Typograph_14_5 spacing={null} fw="fw400">
              Шарапов Александр
            </Typograph_14_5>
          </div>
          <div className={cn(s.moreBtnPlace, "flex-row-end-center")}>
            <ArrowToRight />
          </div>
        </div>
      </div>
      <div className={cn(s.mainBlock, "flex-column-start-center")}>
        <div className={cn(s.persInfo, "flex-column-start-start")}>
          {data1.map((item) => (
            <div className={cn(s.item, "flex-row-between-center")}>
              <div
                className={cn(s.infoBlock, "flex-column-start-start")}
                key={item.id}
              >
                <Typograph_11_5 color="grey-second" spacing={-1} fw="fw400">
                  {item.title}
                </Typograph_11_5>
                <Typograph_14_5 spacing={null} fw="fw400">
                  {item.value}
                </Typograph_14_5>
              </div>
              <div className={cn(s.moreBtnPlace, "flex-row-end-center")}>
                <ArrowToRight />
              </div>
            </div>
          ))}
        </div>

        <div className={cn(s.otherInfo, "flex-column-start-start")}>
          {data2.map((item) => (
            <div className={cn(s.item, "flex-row-between-center")}>
              <div
                className={cn(
                  s.infoBlock,

                  item.title === null
                    ? "flex-column-center-start"
                    : "flex-column-start-start"
                )}
                key={item.id}
              >
                {item.title !== null && (
                  <Typograph_11_5 color="grey-second" spacing={-1} fw="fw400">
                    {item.title}
                  </Typograph_11_5>
                )}
                <Typograph_14_5 spacing={null} fw="fw400">
                  {item.value}
                </Typograph_14_5>
              </div>
              <div className={cn(s.moreBtnPlace, "flex-row-end-center")}>
                <ArrowToRight />
              </div>
            </div>
          ))}
        </div>
        <button>
          <Typograph_14_5 spacing={null} fw="fw400" color="red">
            Выйти из аккаунта
          </Typograph_14_5>
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
