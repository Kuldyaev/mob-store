import { useSelector } from "@/store";
import { Typograph_15_5, Typograph_12_5 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const HeaderFixed = () => {
  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);
  const activeRoute = useSelector((state) => state.status.activeRoute);

  return (
    <div
      className={cn(s.headerFixed, "flex-row-center-center")}
      style={{ display: isShowed ? "flex" : "none" }}
    >
      {activeRoute === "/" && (
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowed ? s.opacity1 : s.opacity0
          )}
        >
          <Typograph_15_5>Главная</Typograph_15_5>
        </div>
      )}
      {activeRoute === "/catalog" && (
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowed ? s.opacity1 : s.opacity0
          )}
        >
          <Typograph_15_5>Каталог</Typograph_15_5>
        </div>
      )}
      {activeRoute === "/cart" && (
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowed ? s.opacity1 : s.opacity0
          )}
        >
          <Typograph_15_5>Корзина</Typograph_15_5>
          <div className={cn(s.details, "flex-row-center-center")}>
            <Typograph_12_5 color="grey-second" spacing={-2} fw="fw400">
              5 товаров
            </Typograph_12_5>
            <Typograph_12_5 color="orange" spacing={-2} fw="fw400">
              2 недоступно
            </Typograph_12_5>
          </div>
        </div>
      )}

      {activeRoute === "/profile" && (
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowed ? s.opacity1 : s.opacity0
          )}
        >
          <Typograph_15_5>Профиль</Typograph_15_5>
        </div>
      )}
    </div>
  );
};

export default HeaderFixed;
