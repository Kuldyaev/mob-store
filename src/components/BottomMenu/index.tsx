import {
  ProfileIcon,
  CatalogIcon,
  MainPageIcon,
  CartIcon,
} from "../../features/Icons";

import s from "./style.module.scss";

const BottomMenu = () => {
  return (
    <div className={s.bottomMenu}>
      <button className={s.bottomMenuBtn}>
        <MainPageIcon />
        <h5>Главная</h5>
      </button>
      <button className={s.bottomMenuBtn}>
        <CatalogIcon />
        <h5>Каталог</h5>
      </button>
      <button className={s.bottomMenuBtn}>
        <CartIcon />
        <h5>Корзина</h5>
      </button>
      <button className={s.bottomMenuBtn}>
        <ProfileIcon />
        <h5>Профиль</h5>
      </button>
    </div>
  );
};

export default BottomMenu;
