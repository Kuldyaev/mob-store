import { FC } from "react";
import s from "./style.module.scss";
import { useState } from "react";
import { ItemCounter } from "../ItemCounter";
import {
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5_b,
  Paragraph5_g,
  CheckBox,
} from "../../components/uikit";

import { DeleteBtn, FavoriteBtn } from "../../components/uikit";

interface CartItemProps {
  item: {
    id: number;
    brand: string;
    img: string;
    desc: string;
    size: string;
    delivery: string;
    color: string;
    price: string;
  };
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={s.item}>
      <div className={s.itemImgPlace}>
        <div
          className={s.itemImg}
          style={{
            backgroundImage: "url('images/" + item.img + ".png')",
          }}
        ></div>
      </div>
      <div className={s.textInfo}>
        <div className={s.itemHeader}>
          <div className={s.desc}>
            <Paragraph2>{item.brand}</Paragraph2>
            <Paragraph3>{item.desc}</Paragraph3>
          </div>
          <CheckBox changeValue={setChecked} checked={checked} />
        </div>
        <div className={s.itemBody}>
          <div className={s.bodySettings}>
            <Paragraph5_g>Цвет:</Paragraph5_g>
            <Paragraph5_b>{item.color}</Paragraph5_b>
          </div>
          <div className={s.bodySettings}>
            <Paragraph5_g>Размер:</Paragraph5_g>
            <Paragraph5_b>
              {item.size} | {item.delivery} дней
            </Paragraph5_b>
          </div>
          <div className={s.price}>
            <Paragraph4>
              {item.price} <span>₽</span>
            </Paragraph4>
          </div>
        </div>
        <div className={s.itemFooter}>
          <div className={s.itemFooterBtnsBlock}>
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <DeleteBtn onClick={() => console.log("Delete Item")} />
          </div>
          <ItemCounter quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
