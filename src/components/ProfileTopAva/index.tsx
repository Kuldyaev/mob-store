import { useNavigate } from "react-router-dom";
// import cn from "classnames";
import s from "./style.module.scss";

const ProfileTopAva = () => {
  const navigate = useNavigate();

  const settingsLink = () => {
    navigate("/examples");
  };

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
        <button onClick={settingsLink}>
          <h6>Настройки &rsaquo;</h6>
        </button>
      </div>
    </div>
  );
};

export default ProfileTopAva;
