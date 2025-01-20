import PopularCategoties from "@/components/PopularCategoties";
import StoriesBar from "@/components/StoriesBar";
import SearchBar from "@/components/SearchBar";
import SportsParts from "@/components/SportsParts";
import SalomonUltra from "@/components/SalomonUltra";
import ForEach from "@/components/ForEach";
import MustHave from "@/components/MustHave";
import { Paragraph6 } from "@/components/uikit";
import s from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={s.back}>
      <div className={s.topImgBlock}>
        <div className={s.topImg}>
          <div className={s.topImgTextBlock}>
            <h4>Moncler x Adidas Originals</h4>
            <h5>
              коллекция созданна в рамках кампании The Art of Explorers и
              посвящена исследованию мира
            </h5>
          </div>
        </div>
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
  );
};

export default HomePage;
