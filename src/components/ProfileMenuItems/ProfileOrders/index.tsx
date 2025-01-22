import { FC, useState } from "react";
import { Paragraph9, BackBtn, SearchBtn } from "@/components/uikit";
import SearchBar from "@/components/SearchBar";
import OrderCard from "@/components/Cards/OrderCard";
import s from "./style.module.scss";

interface ProfileOrdersProps {
  title: string;
  onClickBack?: () => void;
}

const ProfileOrders: FC<ProfileOrdersProps> = ({ title, onClickBack }) => {
  const [isSearchBarShowed, setIsSearchBarShowed] = useState<boolean>(false);

  const data = [
    {
      id: 0,
      favorited: true,
      title: "Собираем и готовим к отправке",
      details: "Доставим к 19 декабря",
      img: "nike",
      brand: "Nike",
      description:
        "Кроссовки The Powerpuff Girls x Nike SBDunk Low «Buttercup»",
      size: "Размер 43 EU",

      price: "24 690₽",
    },
    {
      id: 1,
      favorited: false,
      title: "Уже у вас",
      details: "Кеды",
      img: "vans",
      brand: "Vans",
      description: "Peaches x Vans Knu Skool «Black Pink»",
      size: "Размер 38 EU",
      price: "15 390₽",
    },
    {
      id: 2,
      favorited: true,
      title: "Уже у вас",
      details: "Доставлено 12 октября",
      img: "salomon",
      brand: "Salomon",
      description: "Доставим к 19 декабря",
      size: "Размер 38 EU",
      price: "16 090₽",
    },
    {
      id: 3,
      favorited: true,
      title: "Уже у вас",
      details: "Кроссовки",
      img: "newbalance",
      brand: "New Balance",
      description: "New Balance 2002R «White Beige»",
      size: "Размер 38 EU",
      price: "9 990 ₽",
    },
  ];

  return (
    <div className={s.profileOrders}>
      <div className={s.header}>
        <BackBtn onClick={onClickBack} />
        <Paragraph9>{title}</Paragraph9>
        <SearchBtn onClick={() => setIsSearchBarShowed(!isSearchBarShowed)} />
      </div>
      {isSearchBarShowed && (
        <div className={s.searchBarPlace}>
          <SearchBar />
        </div>
      )}

      <div className={s.body}>
        {data.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileOrders;
