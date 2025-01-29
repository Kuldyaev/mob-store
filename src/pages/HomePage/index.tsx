import { useEffect, useRef, useState } from "react";
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
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);
  const [isFixHeaderSmall, setIsFixHeaderSmall] = useState<boolean>(false);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      if (Number((+rect.top / (+rect.width * 0.964)).toFixed(2)) < 0) {
        elRef.current.style.opacity = "0";
      } else {
        elRef.current.style.opacity = (
          +rect.top /
          (+rect.width * 0.964)
        ).toFixed(2);
      }

      if (isShowedFixHeader) {
        setIsShowedFixHeader(Math.round((+rect.top * 6) / +rect.width) < 1);
      } else {
        setIsShowedFixHeader(Math.round((+rect.top * 6) / +rect.width) < 1);
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

      +rect.top + 0.08 * +rect.width < 0
        ? setIsFixHeaderSmall(true)
        : setIsFixHeaderSmall(false);

      +rect.top + 0.08 * +rect.width < 0
        ? setIsFixHeaderSmall(true)
        : setIsFixHeaderSmall(false);

      console.log(+rect.top + 0.1 * +rect.width);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    isShowedFixHeader
      ? document.getElementById("root")?.parentElement?.classList.remove("dark")
      : document.getElementById("root")?.parentElement?.classList.add("dark");
  }, [isShowedFixHeader]);

  return (
    <>
      <div
        className={cn(
          s.headerFixed,
          isShowedFixHeader ? s.opacity1 : s.opacity0
        )}
      >
        <div
          className={cn(
            s.infoBlock,
            "animHeader",
            "flex-column-center-center",
            isFixHeaderSmall ? "inCenter" : null
          )}
        >
          <Typograph_24>Главная</Typograph_24>
        </div>
      </div>
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
