import { ArrowToRight } from "@/features/Icons";
import { Typograph_14_5, Typograph_12_5 } from "@/components/uikit";
import s from "./style.module.scss";

interface ProfileTopAvaProps {
  onClick: () => void;
}

const ProfileTopAva = ({ onClick }: ProfileTopAvaProps) => {
  return (
    <div className={s.profileTopAva}>
      <div
        className={s.profileAva}
        style={{
          backgroundImage: "url('images/avaExample.jpeg')",
        }}
      ></div>
      <div className={s.profileTextBlock}>
        <Typograph_14_5 fw="fw500" spacing={-2}>
          Шарапов Александр
        </Typograph_14_5>
        <button onClick={onClick} className="flex-row-center-center">
          <Typograph_12_5 fw="fw400" color="grey">
            Настройки
          </Typograph_12_5>
          <ArrowToRight />
        </button>
      </div>
    </div>
  );
};

export default ProfileTopAva;
