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
        <button onClick={onClick}>
          <h6>Настройки &rsaquo;</h6>
        </button>
      </div>
    </div>
  );
};

export default ProfileTopAva;
