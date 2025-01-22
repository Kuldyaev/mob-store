import { FC } from "react";
import DeliveryCard from "@/components/Cards/DeliveryCard";
import { Paragraph9, BackBtn } from "@/components/uikit";
import s from "./style.module.scss";

interface ProfileDeliveriesProps {
  title: string;
  onClickBack?: () => void;
}

const data = [
  {
    id: 0,
    title: "Собираем и готовим к отправке",
    details: "Будет в пункте выдачи 28 декабря",
    img: "nike",
    brand: "Nike",
    description: "Кроссовки The Powerpuff Girls x Nike SBDunk Low «Buttercup»",
    size: "Размер 43 EU",

    price: "24 690₽",
  },
  {
    id: 1,
    title: "Уже у вас",
    details: "Доставлено 12 октября",
    img: "vans",
    brand: "Vans",
    description: "Кроссовки Peaches x Vans Knu Skool «Black Pink»",
    size: "Размер 38 EU",
    price: "15 390₽",
  },
];

const ProfileDeliveries: FC<ProfileDeliveriesProps> = ({
  title,
  onClickBack,
}) => {
  return (
    <div className={s.profileDeliveries}>
      <div className={s.header}>
        <BackBtn onClick={onClickBack} />
        <Paragraph9>{title}</Paragraph9>
        <div>{}</div>
      </div>
      <div className={s.body}>
        {data.map((item) => (
          <DeliveryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileDeliveries;
