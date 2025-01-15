import { Paragraph1 } from "../../components/uikit";
import s from "./style.module.scss";

const MonthDiskountPage = () => {
  return (
    <div className={s.catalogDesk}>
      <Paragraph1>Скидки в декабре</Paragraph1>

      <div className={s.cardDeskBottom}></div>
    </div>
  );
};

export default MonthDiskountPage;
