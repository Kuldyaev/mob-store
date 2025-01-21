import { FC } from "react";
import { Paragraph4, Paragraph5_b, Paragraph5_g } from "@/components/uikit";
import { ArrowToRight } from "@/features/Icons";
import s from "./style.module.scss";

interface DeliveryCardProps {
  title: string;
  details: string;
  img: string;
  brand: string;
  description: string;
  size: string;
  price: string;
  onClick?: () => void;
}

const DeliveryCard: FC<DeliveryCardProps> = ({
  title,
  details,
  img,
  brand,
  description,
  size,
  price,
  onClick,
}) => {
  return (
    <div className={s.deliveryCard}>
      <div className={s.header}>
        <div className={s.textBlock}>
          <Paragraph4>{title}</Paragraph4>
          <Paragraph5_g>{details}</Paragraph5_g>
        </div>
        <div className={s.moreInfo} onClick={onClick}>
          <ArrowToRight />
        </div>
      </div>
      <div className={s.body}>
        <div
          className={s.goodsImg}
          style={{
            backgroundImage: "url('images/" + img + ".png')",
          }}
        ></div>
        <div className={s.goodsInfo}>
          <Paragraph5_b>{brand}</Paragraph5_b>
          <Paragraph5_b>{description}</Paragraph5_b>
          <Paragraph5_g>{size}</Paragraph5_g>
          <Paragraph4>{price} </Paragraph4>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
