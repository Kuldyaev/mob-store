import { FC } from "react";
import { Button, Paragraph5_g, Paragraph5_b, Paragraph9 } from "../uikit";
import cn from "classnames";
import s from "./style.module.scss";

interface CartResultsProps {
  data: {
    quontityTotal: number;
    sumTotal: number;
    sumDiscount: number;
  };
}

const CartResults: FC<CartResultsProps> = ({ data }) => {
  return (
    <div className={s.results}>
      <div className={cn(s.title, "flex-row-between-center")}>
        <Paragraph9>Ваша корзина</Paragraph9>
        <Paragraph5_g>{data.quontityTotal} товаров</Paragraph5_g>
      </div>
      <div className={cn(s.totalSum, "flex-row-between-center")}>
        <Paragraph5_g>{data.quontityTotal} товаров</Paragraph5_g>
        <Paragraph5_b>{data.sumTotal}₽</Paragraph5_b>
      </div>
      <div className={cn(s.discount, "flex-row-between-center")}>
        <Paragraph5_g>Скидка</Paragraph5_g>
        <Paragraph5_b>- {data.sumDiscount}₽</Paragraph5_b>
      </div>

      <Button label="Оформить заказ" />
    </div>
  );
};

export default CartResults;
