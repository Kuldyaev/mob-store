// import cn from "classnames";
import s from "./style.module.scss";

const ProfileTopAva = () => {
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
        <h6>Настройки &rsaquo;</h6>
      </div>
    </div>
  );
};

export default ProfileTopAva;
