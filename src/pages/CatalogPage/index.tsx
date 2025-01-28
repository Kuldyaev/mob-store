import { useState, useEffect, useRef } from "react";
import SearchBar from "@/components/SearchBar";
import { Paragraph9, Paragraph1, Paragraph12 } from "@/components/uikit";
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
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      if (isShowedFixHeader) {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      } else {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cn(s.headerFixed, "flex-row-center-center")}>
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowedFixHeader ? s.opacity1 : s.opacity0
          )}
        >
          <Paragraph9>Каталог</Paragraph9>
        </div>
      </div>
      <div className={s.catalogDesk} ref={elRef}>
        <Paragraph1>Каталог</Paragraph1>
        <SearchBar />
        <div className={s.cardDesk}>
          {catalog.map((item) => (
            <div className={s.card} key={item.id}>
              <div className={s.cardTitle}>
                <Paragraph12> {item.title}</Paragraph12>
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
