import CartItem from "../../components/CarItem";
import { Paragraph1 } from "../../components/uikit";
import s from "./style.module.scss";

const CartPage = () => {
  const goods = [
    {
      id: 1,
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Зеленый",
      price: "24 690",
    },
    {
      id: 2,
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Красный",
      price: "24 690",
    },
  ];
  return (
    <div className={s.cartDesk}>
      <Paragraph1>Корзина</Paragraph1>
      <div>
        {goods.map((item) => (
          <CartItem good={item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
