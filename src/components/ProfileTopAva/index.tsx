import { ArrowToRight } from "@/features/Icons";

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
        <h5>Шарапов Александр</h5>
        <button onClick={onClick} className="flex-row-center-center">
          <h6>Настройки</h6>
          <ArrowToRight />
        </button>
      </div>
    </div>
  );
};

export default ProfileTopAva;
