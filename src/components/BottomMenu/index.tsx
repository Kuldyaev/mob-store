import { useNavigate } from "react-router-dom";
import { useSelector } from "@/store";
import {
  ProfileIcon,
  CatalogIcon,
  MainPageIcon,
  CartIcon,
} from "@/features/Icons";
import { Typograph_9 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const BottomMenu = () => {
  const activeRoute = useSelector((state) => state.status.activeRoute);
  const navigate = useNavigate();

  return (
    <div className={s.bottomMenu}>
      <button
        className={cn(s.bottomMenuBtn, activeRoute === "/" && s.activeBtn)}
        onClick={() => navigate("/")}
      >
        <MainPageIcon />
        <Typograph_9 color={activeRoute === "/" ? "blue" : "grey-second"}>
          Главная
        </Typograph_9>
      </button>
      <button
        className={cn(
          s.bottomMenuBtn,
          activeRoute === "/catalog" && s.activeBtn
        )}
        onClick={() => navigate("/catalog")}
      >
        <CatalogIcon />
        <Typograph_9
          color={activeRoute === "/catalog" ? "blue" : "grey-second"}
        >
          Каталог
        </Typograph_9>
      </button>
      <button
        className={cn(s.bottomMenuBtn, activeRoute === "/cart" && s.activeBtn)}
        onClick={() => navigate("/cart")}
      >
        <CartIcon />
        <Typograph_9 color={activeRoute === "/cart" ? "blue" : "grey-second"}>
          Корзина
        </Typograph_9>
      </button>
      <button
        className={cn(
          s.bottomMenuBtn,
          activeRoute === "/profile" && s.activeBtn
        )}
        onClick={() => navigate("/profile")}
      >
        <ProfileIcon />
        <Typograph_9
          color={activeRoute === "/profile" ? "blue" : "grey-second"}
        >
          Профиль
        </Typograph_9>
      </button>
    </div>
  );
};

export default BottomMenu;
