import { FC } from "react";
import {
  Button,
  Typograph_12_5,
  Typograph_11_5,
  Typograph_20,
} from "@/components/uikit";
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
        <Typograph_20>Ваша корзина</Typograph_20>
        <Typograph_11_5 fw="fw400" spacing={-2} color="grey-second">
          {data.quontityTotal} товаров
        </Typograph_11_5>
      </div>
      <div className={cn(s.totalSum, "flex-row-between-center")}>
        <Typograph_12_5 fw="fw400" spacing={-3} color="grey-second">
          {data.quontityTotal} товаров
        </Typograph_12_5>
        <Typograph_12_5 fw="fw600" spacing={-3}>
          {Intl.NumberFormat("ru-RU").format(data.sumTotal)}₽
        </Typograph_12_5>
      </div>
      <div className={cn(s.discount, "flex-row-between-center")}>
        <Typograph_12_5 fw="fw400" spacing={-3} color="grey-second">
          Скидка{" "}
        </Typograph_12_5>
        <Typograph_12_5 fw="fw600" spacing={-3} color="blue">
          - {Intl.NumberFormat("ru-RU").format(data.sumDiscount)}₽
        </Typograph_12_5>
      </div>

      <Button label="Оформить заказ" />
    </div>
  );
};

export default CartResults;
