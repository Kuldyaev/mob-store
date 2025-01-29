import { useEffect, useRef } from "react";
import { dispatch, useSelector } from "@/store";
import { setHeaderFixedShowed } from "@/store/slices/status";
import SearchBar from "@/components/SearchBar";
import { Typograph_24, Typograph_14_5 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const catalog = [
  {
    id: 0,
    title: "Общие",
    image: "cat_0",
  },
  {
    id: 1,
    title: "Одежда",
    image: "cat_1",
  },
  {
    id: 2,
    title: "Аксессуары",
    image: "cat_2",
  },
  {
    id: 3,
    title: "Спорт и отдых",
    image: "cat_3",
  },
  {
    id: 4,
    title: "Для дома",
    image: "cat_4",
  },
  {
    id: 5,
    title: "Обувь",
    image: "cat_5",
  },
  {
    id: 6,
    title: "Искусство",
    image: "cat_6",
  },
  {
    id: 7,
    title: "Красота и уход",
    image: "cat_7",
  },
  {
    id: 8,
    title: "Сумки и багаж",
    image: "cat_8",
  },
  {
    id: 9,
    title: "Часы",
    image: "cat_9",
  },
  {
    id: 10,
    title: "Канцтовары",
    image: "cat_10",
  },
  {
    id: 11,
    title: "Досуг и развлечения",
    image: "cat_11",
  },

  {
    id: 12,
    title: "Украшения",
    image: "cat_12",
  },
  {
    id: 13,
    title: "Товары для детей",
    image: "cat_13",
  },
  {
    id: 14,
    title: "Игрушки",
    image: "cat_14",
  },
  {
    id: 15,
    title: "Подарки",
    image: "cat_15",
  },
];

const CatalogPage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);
  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();
      dispatch(
        setHeaderFixedShowed(Math.round((+rect.top * 17.727) / +rect.width) < 1)
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cn(s.headerFixedSub, "flex-row-center-center")}></div>
      <div className={s.catalogDesk} ref={elRef}>
        <div className={cn(s.smallTitle, isShowed ? s.opacity0 : s.opacity1)}>
          <Typograph_24>Каталог</Typograph_24>
        </div>
        <SearchBar />
        <div className={s.cardDesk}>
          {catalog.map((item) => (
            <div className={s.card} key={item.id}>
              <div className={s.cardTitle}>
                <Typograph_14_5> {item.title}</Typograph_14_5>
              </div>
              <div
                className={s.cardImgPlace}
                style={{
                  backgroundImage: "url('images/" + item.image + ".png')",
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className={s.cardDeskBottom}></div>
      </div>
    </>
  );
};

export default CatalogPage;
