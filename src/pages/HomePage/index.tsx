import { useEffect, useRef, useState } from "react";
import PopularCategoties from "@/components/PopularCategoties";
import StoriesBar from "@/components/StoriesBar";
import SearchBar from "@/components/SearchBar";
import SportsParts from "@/components/SportsParts";
import SalomonUltra from "@/components/SalomonUltra";
import ForEach from "@/components/ForEach";
import MustHave from "@/components/MustHave";
import { Paragraph6, Paragraph1 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const HomePage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const shadow = useRef<HTMLDivElement | null>(null);
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);
  const [isFixHeaderSmall, setIsFixHeaderSmall] = useState<boolean>(false);
  const [topFixHeaderText, setTopFixHeaderText] = useState<number | string>(0);
  const [leftFixHeaderText, setLeftFixHeaderText] = useState<number | string>(
    0
  );
  const [fontFixHeaderText, setFontFixHeaderText] = useState<number | string>(
    24
  );
  const [heightFixHeaderText, setHeightFixHeaderText] = useState<
    number | string
  >(73);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();
      const currYpos = Math.round((+rect.top * 390) / +rect.width);

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

      if (currYpos < -45) {
        // console.log("const: " + +rect.width);
        console.log("Y: " + +currYpos);
        console.log("height: " + ((118 + +currYpos) * +rect.width) / 360);

        setIsShowedFixHeader(false);
        // if (49 + 45 + +currYpos > 4) {
        //   setTopFixHeaderText(
        //     ((49 + 45 + +currYpos * 0.95) * +rect.width) / 360
        //   );
        //   setLeftFixHeaderText(
        //     (((-135 - +currYpos * 3.2) * +rect.width) / 360).toFixed(2)
        //   );
        //   // setIsFixHeaderSmall(false);
        // } else {
        //   // setIsFixHeaderSmall(true);
        // }

        if (currYpos < -75) {
          if (
            +heightFixHeaderText !== Math.min((43 * +rect.width) / 360, 52.92)
          )
            setHeightFixHeaderText(Math.min((43 * +rect.width) / 360, 52.92));

          if (+fontFixHeaderText !== Math.min((16 * +rect.width) / 360, 19.69))
            setFontFixHeaderText(Math.min((16 * +rect.width) / 360, 19.69));
        } else {
          setHeightFixHeaderText(((118 + +currYpos) * +rect.width) / 360);
          setFontFixHeaderText(
            Math.min(((16 - +currYpos / 10) * +rect.width) / 360, 19.69)
          );
        }
      } else {
        setIsShowedFixHeader(true);
        // setTopFixHeaderText((49 * +rect.width) / 360);
        if (+heightFixHeaderText !== Math.min((73 * +rect.width) / 360, 89.85))
          setHeightFixHeaderText(Math.min((73 * +rect.width) / 360, 89.85));

        if (+fontFixHeaderText !== Math.min((24 * +rect.width) / 360, 29.54))
          setFontFixHeaderText(Math.min((24 * +rect.width) / 360, 29.54));
      }

      // console.log(currYpos);
    }
  };

  useEffect(() => {
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
    isShowedFixHeader
      ? document.getElementById("root")?.parentElement?.classList.remove("dark")
      : document.getElementById("root")?.parentElement?.classList.add("dark");
  }, [isShowedFixHeader]);

  return (
    <>
      <div
        className={cn(
          s.headerFixed,
          !isShowedFixHeader ? s.opacity1 : s.opacity0,
          "homeTopHeaderFixed"
        )}
        style={{ height: heightFixHeaderText + "px" }}
      >
        <div
          className={cn(
            s.infoBlock,
            "animHeader",
            "flex-column-center-center",
            isFixHeaderSmall ? "inCenter" : null
          )}
          style={{
            color: !isShowedFixHeader ? "black" : "white",
            top: topFixHeaderText + "px",
            left: leftFixHeaderText + "px",
          }}
        >
          <h1 style={{ fontSize: fontFixHeaderText + "px" }}>Главная</h1>
        </div>

        {/* <div className={cn(s.smallTitle, "flex-row-center-center")}>
          <h3 style={{ opacity: isFixHeaderSmall ? 1 : 0 }}>Главная</h3>
        </div> */}
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
            <div
              className={cn(
                s.titlePlace,
                isShowedFixHeader ? null : s.blackText
              )}
            >
              <Paragraph1>Главная</Paragraph1>
            </div>
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
