import { FC } from "react";
import s from "./style.module.scss";

interface ItemCounterProps {
  quantity: number;
  setQuantity: (x: number) => void;
}

export const ItemCounter: FC<ItemCounterProps> = ({
  quantity,
  setQuantity,
}) => {
  const changeQuantity = (x: number) => {
    if (x > 0) {
      setQuantity(x);
    }
  };

  return (
    <div className={s.counter}>
      <button
        className={quantity === 1 ? s.dis : undefined}
        onClick={() => changeQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      {quantity}
      <button onClick={() => changeQuantity(quantity + 1)}>+</button>
    </div>
  );
};
