import cn from "classnames";
import s from "./style.module.scss";

const SportsParts = () => {
  return (
    <div className={s.popcat}>
      <div className={s.popcatTitle}>
        <h4>Виды спорта</h4>
      </div>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image1)}></div>
          <h5>Футбол</h5>
        </div>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image2)}></div>
          <h5>Баскетбол</h5>
        </div>
      </div>
      <div className={s.popBottom}></div>
    </div>
  );
};

export default SportsParts;
