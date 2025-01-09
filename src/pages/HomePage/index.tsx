import s from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={s.back}>
      <div className={s.topImgBlock}>
        <div className={s.topImg}></div>
      </div>
      <div className={s.homedesk}>
        <div className={s.searchBar}>Товар, бренд или артикул</div>
        <h3>HomePage</h3>
      </div>
    </div>
  );
};

export default HomePage;
