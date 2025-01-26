import { useEffect, useRef, useState } from "react";
import PopularCategoties from "@/components/PopularCategoties";
import StoriesBar from "@/components/StoriesBar";
import SearchBar from "@/components/SearchBar";
import SportsParts from "@/components/SportsParts";
import SalomonUltra from "@/components/SalomonUltra";
import ForEach from "@/components/ForEach";
import MustHave from "@/components/MustHave";
import { Paragraph6, Paragraph9 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const HomePage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const shadow = useRef<HTMLDivElement | null>(null);
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);

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
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      } else {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          s.headerFixed,
          "flex-row-center-center",
          isShowedFixHeader ? s.opacity1 : s.opacity0
        )}
      >
        <div className={cn(s.infoBlock, "flex-column-center-center")}>
          <Paragraph9>Главная</Paragraph9>
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
              <Paragraph6>Популярные категории</Paragraph6>
            </div>
            <PopularCategoties />
            <div className={s.blockTitle}>
              <Paragraph6>Salomon X Ultra 4</Paragraph6>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Paragraph6>Виды спорта</Paragraph6>
            </div>
            <SportsParts />
            <div className={s.blockTitle}>
              <Paragraph6>Salomon X Ultra 4</Paragraph6>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Paragraph6>Для каждого</Paragraph6>
            </div>
            <ForEach />
            <div className={s.blockTitle}>
              <Paragraph6>Salomon X Ultra 4</Paragraph6>
              <div className={s.toAllBtn}>Все &gt;</div>
            </div>
            <SalomonUltra />
            <div className={s.blockTitle}>
              <Paragraph6>Мастхэв для дома</Paragraph6>
            </div>
            <MustHave />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
