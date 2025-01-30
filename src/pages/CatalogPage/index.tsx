import { useEffect, useRef } from "react";
import { dispatch, useSelector } from "@/store";
import { setHeaderFixedShowed } from "@/store/slices/status";
import SearchBar from "@/components/SearchBar";
import { Typograph_24, Typograph_14_5 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const CatalogPage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);
  const catalog = useSelector((state) => state.catalog.data);

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
