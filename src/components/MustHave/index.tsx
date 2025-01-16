import cn from "classnames";
import s from "./style.module.scss";

const MustHave = () => {
  return (
    <div className={s.popcat}>
      <div className={s.popcatTitle}>
        <h4>Мастхэв для дома</h4>
      </div>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <button>Кухня →</button>
          <div className={cn(s.popcatLineItemImg, s.image1)}></div>
        </div>
        <div className={s.popcatLineItem}>
          <button>Прихожая</button>
          <div className={cn(s.popcatLineItemImg, s.image2)}></div>
        </div>
      </div>
    </div>
  );
};

export default MustHave;
