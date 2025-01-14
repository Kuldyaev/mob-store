import PopularCategoties from "../../components/PopularCategoties";
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
        <PopularCategoties />
      </div>
    </div>
  );
};

export default HomePage;
