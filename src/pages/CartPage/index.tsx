import { useState, useEffect, useRef } from "react";
import CartItem from "@/components/CarItem";
import CartResults from "@/components/CartResults";
import {
  Paragraph1,
  Paragraph4,
  Paragraph5_g,
  Paragraph7,
  Paragraph9,
  CheckBox,
  DeleteBtn,
} from "@/components/uikit";

import { ArrowToRight } from "@/features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

const CartPage = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      if (isShowedFixHeader) {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      } else {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goods = [
    {
      id: 1,
      brand: "Nike",
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Зеленый",
      price: "24 690",
      available: true,
      warning: "Осталось 3 шт по текущей цене",
    },
    {
      id: 2,
      brand: "Vans",
      type: "shoes",
      img: "vans",
      desc: "Peaches x Vans Knu Skool «Black Pink»",
      size: "38 EU",
      delivery: "5-10",
      color: "Красный",
      price: "15 390",
      available: true,
      warning: null,
    },
    {
      id: 3,
      brand: "Nike",
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Синий",
      price: "24 690",
      available: false,
      warning: null,
    },
    {
      id: 4,
      brand: "New Balance",
      type: "shoes",
      img: "newbalance",
      desc: "New Balance 2002R «White Beige»",
      size: "39 EU",
      delivery: "5-10",
      color: "Синий",
      price: "9 990",
      available: true,
      warning: null,
    },
  ];

  const cartResults = {
    quontityTotal: 5,
    sumTotal: 78290,
    sumDiscount: 1200,
  };
  return (
    <>
      <div className={cn(s.headerFixed, "flex-row-center-center")}>
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowedFixHeader ? s.opacity1 : s.opacity0
          )}
        >
          <Paragraph9>Корзина</Paragraph9>
          <div className={cn(s.details, "flex-row-center-center")}>
            <Paragraph5_g>5 товаров</Paragraph5_g>
            <Paragraph5_g>2 недоступно</Paragraph5_g>
          </div>
        </div>
      </div>
      <div className={s.cartDesk} ref={elRef}>
        <div className={s.cartDeskTop}>
          <div
            className={cn(
              s.header,
              isShowedFixHeader ? s.opacity0 : s.opacity1
            )}
          >
            <Paragraph1>Корзина</Paragraph1>
            <div className={s.details}>
              <Paragraph5_g>5 товаров</Paragraph5_g>
              <Paragraph5_g>2 недоступно</Paragraph5_g>
            </div>
          </div>
          <div className={cn(s.freeDeliveryBlock, "flex-column-start-start")}>
            <div className={cn(s.freeDeliveryInfo, "flex-row-between-center")}>
              <div className={cn(s.title, "flex-column-start-start")}>
                <Paragraph4>Доставка курьером </Paragraph4>
                <Paragraph5_g>Бесплатно</Paragraph5_g>
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
              <Paragraph7>12 000₽</Paragraph7>
              <Paragraph7>22 000₽</Paragraph7>
            </div>
          </div>
          <div className={cn(s.groupActionsBlock, "flex-row-between-center")}>
            <div className={cn(s.deleteSelected, "flex-row-start-center")}>
              <DeleteBtn />
              <Paragraph5_g>Удалить выбранные</Paragraph5_g>
            </div>
            <div className={cn(s.chooseAll, "flex-row-end-center")}>
              <Paragraph5_g>Выбрать все</Paragraph5_g>
              <CheckBox
                checked={isSelectedAll}
                changeValue={() => {
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
            <div className={s.unavalableTitle}>Недоступные товары</div>
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
