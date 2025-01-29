import { useEffect, useRef } from "react";
import { dispatch, useSelector } from "@/store";
import { setHeaderFixedShowed } from "@/store/slices/status";
import PopularCategoties from "@/components/PopularCategoties";
import StoriesBar from "@/components/StoriesBar";
import SearchBar from "@/components/SearchBar";
import SportsParts from "@/components/SportsParts";
import SalomonUltra from "@/components/SalomonUltra";
import ForEach from "@/components/ForEach";
import MustHave from "@/components/MustHave";
import { Typograph_24, Typograph_19 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const HomePage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const shadow = useRef<HTMLDivElement | null>(null);

  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);

  // const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);
  // const [isFixHeaderSmall, setIsFixHeaderSmall] = useState<boolean>(false);


  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();
      const currYpos = Math.round((+rect.top * 390) / +rect.width);

      dispatch(
        setHeaderFixedShowed(Math.round((+rect.top * 100) / +rect.width) < -15)
      );

      if (Number((+rect.top / (+rect.width * 0.964)).toFixed(2)) < 0) {
        elRef.current.style.opacity = "0";
      } else {
        elRef.current.style.opacity = (
          +rect.top /
          (+rect.width * 0.964)
        ).toFixed(2);
      }

      if (shadow.current) {
        if (Number((+rect.top / (+rect.width * 0.964)).toFixed(2)) < 0) {
          shadow.current.style.opacity = "1";
        } else {
          shadow.current.style.opacity = (
            1 -
            +rect.top / (+rect.width * 0.964)
          ).toFixed(2);
        }
      }



    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    setTopFixHeaderText(Math.min((49 * window.outerWidth) / 390, 60.31));
    setLeftFixHeaderText(Math.min(((15 * window.outerWidth) / 390, 18.46)));
    setFontFixHeaderText(Math.min((24 * window.outerWidth) / 390, 29.54));
    setHeightFixHeaderText(Math.min((73 * window.outerWidth) / 390, 89.85));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setTopFixHeaderText(Math.min((49 * window.outerWidth) / 390, 60.31));
      setLeftFixHeaderText(Math.min(((15 * window.outerWidth) / 390, 18.46)));
      setFontFixHeaderText(Math.min((24 * window.outerWidth) / 390, 29.54));
      setHeightFixHeaderText(Math.min((73 * window.outerWidth) / 390, 89.85));
    };
  }, []);

  useEffect(() => {
    isShowed
      ? document.getElementById("root")?.parentElement?.classList.remove("dark")
      : document.getElementById("root")?.parentElement?.classList.add("dark");
  }, [isShowed]);

  return (
    <>

      <div className={s.shade} ref={shadow}></div>
      <div className={s.back}>
        <div className={s.topImgBlock}>
          <div className={s.topImg}></div>
        </div>
        <div className={s.desk}>
          <div className={s.topImgTextBlock} ref={elRef}>
            <h4>Moncler x Adidas Originals</h4>
            <h5>
              коллекция созданна в рамках кампании The Art of Explorers и
              посвящена исследованию мира
            </h5>
          </div>
          <div className={s.homedesk}>
            <div

              className={cn(s.smallTitle, isShowed ? s.opacity0 : s.opacity1)}
            >
              <Typograph_24>Главная</Typograph_24>

            </div>
            <SearchBar />
            <StoriesBar />
            <div className={s.blockTitle}>
              <Typograph_19>Популярные категории</Typograph_19>
            </div>
            <PopularCategoties />
            <div className={s.blockTitle}>
              <Typograph_19>Salomon X Ultra 4</Typograph_19>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Typograph_19>Виды спорта</Typograph_19>
            </div>
            <SportsParts />
            <div className={s.blockTitle}>
              <Typograph_19>Salomon X Ultra 4</Typograph_19>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Typograph_19>Для каждого</Typograph_19>
            </div>
            <ForEach />
            <div className={s.blockTitle}>
              <Typograph_19>Salomon X Ultra 4</Typograph_19>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Typograph_19>Мастхэв для дома</Typograph_19>
            </div>
            <MustHave />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
