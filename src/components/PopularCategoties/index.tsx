import cn from "classnames";
import s from "./style.module.scss";

const PopularCategoties = () => {
  return (
    <div className={s.popcat}>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image1)}></div>
          <h5>Повседневная обувь</h5>
        </div>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image2)}></div>
          <h5>Название категории</h5>
        </div>
      </div>
      <div className={s.popBottom}></div>
    </div>
  );
};

export default PopularCategoties;
