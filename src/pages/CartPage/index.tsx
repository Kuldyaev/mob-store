import CartItem from "../../components/CarItem";

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
    }
  ]
  return <div>
    <CartItem goods={goods}/>
  </div>;
};

export default CartPage;
