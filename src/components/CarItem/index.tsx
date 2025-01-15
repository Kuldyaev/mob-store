import { FC } from "react";
import s from "./style.module.scss";
import { useState } from "react";
import { ItemCounter } from "../ItemCounter";
import { CheckBox } from "../../components/uikit";

interface CartItemProps {
  good: {
    id: number;
    img: string;
    desc: string;
    size: string;
    delivery: string;
    color: string;
    price: string;
  };
}

const CartItem: FC<CartItemProps> = ({ good }) => {
  const [checked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div key={good.id}>
      <div className={s.item}>
        <div className={s.itemImg}>
          <div
            className={s.img}
            style={{
              backgroundImage: "url('images/" + good.img + ".png')",
            }}
          ></div>
        </div>
        <div className={s.textInfo}>
          <div className={s.itemHeader}>
            <div className={s.desc}>{good.desc}</div>
            <CheckBox changeValue={setChecked} checked={checked} />
          </div>
          <div className={s.itemBody}>
            <div className={s.bodySettings}>
              Цвет: <span>{good.color}</span>
            </div>
            <div className={s.bodySettings}>
              Размер:{" "}
              <span>
                {good.size} | {good.delivery} дней
              </span>
            </div>
          </div>
          <div className={s.itemFooter}>
            <div className={s.price}>
              {good.price} <span>₽</span>
            </div>

            <ItemCounter quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
