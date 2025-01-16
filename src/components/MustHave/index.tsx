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
          <div className={cn(s.popcatLineItemImg, s.image1)}>
            <button>Кухня →</button>
          </div>
        </div>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image2)}>
            <button>Прихожая</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustHave;
