import cn from "classnames";
import s from "./style.module.scss";

const ForEach = () => {
  return (
    <div className={s.forEach}>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image1)}>
            <button>Мужчины →</button>
          </div>
        </div>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image2)}>
            <button>Женщины →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForEach;
