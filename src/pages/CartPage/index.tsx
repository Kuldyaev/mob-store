import { useState, useEffect, useRef } from "react";
import { dispatch, useSelector } from "@/store";
import { setHeaderFixedShowed } from "@/store/slices/status";
import CartItem from "@/components/CarItem";
import CartResults from "@/components/CartResults";
import {
  CheckBox,
  DeleteBtn,
  Typograph_24,
  Typograph_14_5,
  Typograph_12_5,
  Typograph_11_5,
} from "@/components/uikit";

import { ArrowToRight } from "@/features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

const CartPage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);
  const goods = useSelector((state) => state.cart.goods);
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      dispatch(
        setHeaderFixedShowed(Math.round((+rect.top * 17.727) / +rect.width) < 1)
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartResults = {
    quontityTotal: 5,
    sumTotal: 78290,
    sumDiscount: 1200,
  };
  return (
    <>
      <div className={cn(s.headerFixedSub, "flex-row-center-center")}></div>
      <div className={s.cartDesk} ref={elRef}>
        <div className={s.cartDeskTop}>
          <div className={cn(s.header, isShowed ? s.opacity0 : s.opacity1)}>
            <Typograph_24>Корзина</Typograph_24>
            <div className={s.details}>
              <Typograph_12_5 color="grey-second" spacing={-2} fw="fw400">
                5 товаров
              </Typograph_12_5>
              <Typograph_12_5 color="orange" spacing={-2} fw="fw400">
                2 недоступно
              </Typograph_12_5>
            </div>
          </div>
          <div className={cn(s.freeDeliveryBlock, "flex-column-start-start")}>
            <div className={cn(s.freeDeliveryInfo, "flex-row-between-center")}>
              <div className={cn(s.title, "flex-column-start-start")}>
                <Typograph_14_5 spacing={-3}>Доставка курьером </Typograph_14_5>
                <Typograph_12_5 spacing={-2} color="grey-second" fw="fw400">
                  Бесплатно
                </Typograph_12_5>
              </div>
              <ArrowToRight />
            </div>
            <div className={s.indicator}>{}</div>
            <div
              className={cn(
                s.freeDeliveryConditions,
                "flex-row-between-center"
              )}
            >
              <Typograph_11_5 color="blue" spacing={-2} fw="fw500">
                12 000₽
              </Typograph_11_5>
              <Typograph_11_5 color="blue" spacing={-2} fw="fw500">
                22 000₽
              </Typograph_11_5>
            </div>
          </div>
          <div className={cn(s.groupActionsBlock, "flex-row-between-center")}>
            <div className={cn(s.deleteSelected, "flex-row-start-center")}>
              <DeleteBtn />
              <Typograph_12_5 spacing={-2} color="grey-second" fw="fw500">
                Удалить выбранные
              </Typograph_12_5>
            </div>
            <div className={cn(s.chooseAll, "flex-row-end-center")}>
              <Typograph_12_5 spacing={-2} color="grey-second" fw="fw500">
                Выбрать все
              </Typograph_12_5>
              <CheckBox
                checked={isSelectedAll}
                onChange={() => {
                  setIsSelectedAll(!isSelectedAll);
                }}
              />
            </div>
          </div>
        </div>
        <div className={s.cartDeskBody}>
          {goods
            .filter((item) => item.available)
            .map((item) => (
              <CartItem item={item} key={item.id} />
            ))}

          <div
            className={s.unavalableBlock}
            style={{
              display:
                goods.find((item) => !item.available) !== undefined
                  ? "flex"
                  : "none",
            }}
          >
            <div className={s.unavalableTitle}>
              <Typograph_12_5 spacing={-3} color="grey-second" fw="fw600">
                Недоступные товары
              </Typograph_12_5>
            </div>
            {goods
              .filter((item) => !item.available)
              .map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
          </div>
        </div>
        <CartResults data={cartResults} />
      </div>
    </>
  );
};

export default CartPage;
