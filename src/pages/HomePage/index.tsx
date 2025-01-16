import PopularCategoties from "../../components/PopularCategoties";
import StoriesBar from "../../components/StoriesBar";
import SearchBar from "../../components/SearchBar";
import s from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={s.back}>
      <div className={s.topImgBlock}>
        <div className={s.topImg}></div>
      </div>
      <div className={s.homedesk}>
        <SearchBar />
        <StoriesBar />
        <PopularCategoties />
      </div>
    </div>
  );
};

export default HomePage;
