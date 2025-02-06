import { FC } from "react";
import { useState } from "react";
import { ItemCounter } from "../ItemCounter";
import { WarningInfoIcon, ArrowToRight } from "@/features/Icons";
import {
  Typograph_14_5,
  Typograph_12_5,
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
            <Typograph_12_5 fw="fw600" spacing={-2}>
              {item.brand}
            </Typograph_12_5>
            <Typograph_12_5 fw="fw400" spacing={-3}>
              {item.desc}{" "}
            </Typograph_12_5>
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
          <CheckBox onChange={setChecked} checked={checked} />
        </div>
        <div className={s.itemBody}>
          {/* <div className={s.bodySettings}>
            <Paragraph5_g>Цвет:</Paragraph5_g>
            <Paragraph5_b>{item.color}</Paragraph5_b>
          </div> */}
          {item.available && (
            <div className={s.bodySettings}>
              <Typograph_12_5 fw="fw400" spacing={-2} color="grey-second">
                Размер:
              </Typograph_12_5>
              <Typograph_12_5 fw="fw400" spacing={-2}>
                {item.size} <span>|</span> {item.delivery} дней
              </Typograph_12_5>
              <ArrowToRight />
            </div>
          )}
          {item.available && (
            <div className={s.price}>
              <Typograph_14_5 fw="fw600" spacing={-3}>
                {item.price} <span>₽</span>
              </Typograph_14_5>
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
