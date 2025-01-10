import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  ProfileIcon,
  CatalogIcon,
  MainPageIcon,
  CartIcon,
} from "../../features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

const BottomMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActiveRoute, setIsActiveRoute] = useState<string>("/");

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths[1] === "") {
      setIsActiveRoute("/");
    } else {
      setIsActiveRoute("/" + paths[1]);
    }
  }, [location]);

  const homeLink = () => {
    navigate("/");
  };

  const catalogLink = () => {
    navigate("/catalog");
  };

  const cartLink = () => {
    navigate("/cart");
  };

  const profileLink = () => {
    navigate("/profile");
  };

  return (
    <div className={s.bottomMenu}>
      <button
        className={cn(s.bottomMenuBtn, isActiveRoute === "/" && s.activeBtn)}
        onClick={homeLink}
      >
        <MainPageIcon />
        <h5>Главная</h5>
      </button>
      <button
        className={cn(
          s.bottomMenuBtn,
          isActiveRoute === "/catalog" && s.activeBtn
        )}
        onClick={catalogLink}
      >
        <CatalogIcon />
        <h5>Каталог</h5>
      </button>
      <button
        className={cn(
          s.bottomMenuBtn,
          isActiveRoute === "/cart" && s.activeBtn
        )}
        onClick={cartLink}
      >
        <CartIcon />
        <h5>Корзина</h5>
      </button>
      <button
        className={cn(
          s.bottomMenuBtn,
          isActiveRoute === "/profile" && s.activeBtn
        )}
        onClick={profileLink}
      >
        <ProfileIcon />
        <h5>Профиль</h5>
      </button>
    </div>
  );
};

export default BottomMenu;
