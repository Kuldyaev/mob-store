import { FC } from "react";
import { Paragraph4, Paragraph5_b, Paragraph5_g } from "@/components/uikit";
import { ArrowToRight } from "@/features/Icons";
import s from "./style.module.scss";

interface DeliveryCardProps {
  item: {
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

const DeliveryCard: FC<DeliveryCardProps> = ({ item, onClick }) => {
  return (
    <div className={s.deliveryCard}>
      <div className={s.header}>
        <div className={s.textBlock}>
          <Paragraph4>{item.title}</Paragraph4>
          <Paragraph5_g>{item.details}</Paragraph5_g>
        </div>
        <div className={s.moreInfo} onClick={onClick}>
          <ArrowToRight />
        </div>
      </div>
      <div className={s.body}>
        <div
          className={s.goodsImg}
          style={{
            backgroundImage: "url('images/" + item.img + ".png')",
          }}
        ></div>
        <div className={s.goodsInfo}>
          <Paragraph5_b>{item.brand}</Paragraph5_b>
          <Paragraph5_b>{item.description}</Paragraph5_b>
          <Paragraph5_g>{item.size}</Paragraph5_g>
          <Paragraph4>{item.price} </Paragraph4>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
