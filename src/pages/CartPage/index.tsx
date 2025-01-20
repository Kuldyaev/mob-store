import CartItem from "@/components/CarItem";
import { Paragraph1 } from "@/components/uikit";
import s from "./style.module.scss";

const CartPage = () => {
  const goods = [
    {
      id: 1,
      brand: "Nike",
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
      brand: "Nike",
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Красный",
      price: "24 690",
    },
    {
      id: 3,
      brand: "Nike",
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Синий",
      price: "24 690",
    },
    {
      id: 4,
      brand: "Reebok",
      type: "shoes",
      img: "nike",
      desc: "Кроссовки The Powerpuff Girls x Nike SB Dunk Low «Buttercup»",
      size: "43 EU",
      delivery: "5-10",
      color: "Синий",
      price: "24 690",
    },
  ];
  return (
    <div className={s.cartDesk}>
      <Paragraph1>Корзина</Paragraph1>
      <div>
        {goods.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
