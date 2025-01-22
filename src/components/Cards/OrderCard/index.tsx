import { FC } from "react";
import { Paragraph3, Paragraph4, Paragraph5_g } from "@/components/uikit";
import {
  favotiteIcon,
  menuOutlinedIcon,
  SlideIndicatorIcon,
} from "@/features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

interface OrderCardProps {
  item: {
    favorited: boolean;
    title: string;
    details: string;
    img: string;
    brand: string;
    description: string;
    size: string;
    price: string;
  };
  onClick?: () => void;
}

const OrderCard: FC<OrderCardProps> = ({ item, onClick }) => {
  return (
    <div className={s.orderCard}>
      <div
        className={cn(
          s.favorited,
          item.favorited ? s.favoritedPositive : s.favoritedNegative
        )}
      >
        {item.favorited && <img src={favotiteIcon} alt="cd" />}
        {!item.favorited && <img src={menuOutlinedIcon} alt="cd" />}
      </div>
      <div className={s.colors}>
        <div className={s.colorCircles}>
          <div
            className={s.colorCircle}
            style={{
              backgroundColor: "#80D262",
            }}
          ></div>
          <div
            className={cn(s.colorCircle, s.colorCircleSecond)}
            style={{
              backgroundColor: "black",
            }}
          ></div>
        </div>
        <h6>+2</h6>
      </div>
      <div
        className={s.goodsImg}
        style={{
          backgroundImage: "url('images/goods/" + item.img + ".png')",
        }}
      ></div>
      <div className={s.body}>
        <div className={s.slideIndicator}>
          <div className={s.indicator}>
            <SlideIndicatorIcon />
          </div>
        </div>
        <div className={s.goodsInfo} onClick={onClick}>
          <div className={s.goodsInfoTop}>
            <Paragraph3>{item.brand} </Paragraph3>
            <Paragraph3>{item.description} </Paragraph3>
            <Paragraph5_g> {item.details}</Paragraph5_g>
          </div>
          <Paragraph4>{item.price} </Paragraph4>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
