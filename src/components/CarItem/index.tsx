import { FC } from "react";
import { useState } from "react";
import { ItemCounter } from "../ItemCounter";
import { WarningInfoIcon, ArrowToRight } from "@/features/Icons";
import {
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5_b,
  Paragraph5_g,
  CheckBox,
  DeleteBtn,
  FavoriteBtn,
} from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

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
    warning: string | null;
    available: boolean;
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
          className={cn(s.itemImg, item.available ? null : s.smallImg)}
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
            {!item.available && (
              <div className={s.notavailable}>
                Разобрали, но есть другие размеры
              </div>
            )}
            {item.warning && (
              <div className={cn("flex-row-start-center", s.warn)}>
                <div className={s.notavailable}>{item.warning}</div>
                <WarningInfoIcon />
              </div>
            )}
          </div>
          <CheckBox changeValue={setChecked} checked={checked} />
        </div>
        <div className={s.itemBody}>
          {/* <div className={s.bodySettings}>
            <Paragraph5_g>Цвет:</Paragraph5_g>
            <Paragraph5_b>{item.color}</Paragraph5_b>
          </div> */}
          {item.available && (
            <div className={s.bodySettings}>
              <Paragraph5_g>Размер:</Paragraph5_g>
              <Paragraph5_b>
                {item.size} <span>|</span> {item.delivery} дней
              </Paragraph5_b>
              <ArrowToRight />
            </div>
          )}
          {item.available && (
            <div className={s.price}>
              <Paragraph4>
                {item.price} <span>₽</span>
              </Paragraph4>
            </div>
          )}
        </div>
        <div className={s.itemFooter}>
          <div className={s.itemFooterBtnsBlock}>
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <DeleteBtn onClick={() => console.log("Delete Item")} />
          </div>
          {item.available && (
            <ItemCounter quantity={quantity} setQuantity={setQuantity} />
          )}
          {!item.available && (
            <button className={cn(s.sameBtn, "flex-row-center-center")}>
              Похожие
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
