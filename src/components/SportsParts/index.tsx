import { Paragraph10 } from "@/components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const SportsParts = () => {
  return (
    <div className={s.popcat}>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image1)}></div>
          <Paragraph10>Футбол</Paragraph10>
        </div>
        <div className={s.popcatLineItem}>
          <div className={cn(s.popcatLineItemImg, s.image2)}></div>
          <Paragraph10>Баскетбол</Paragraph10>
        </div>
      </div>
    </div>
  );
};

export default SportsParts;
