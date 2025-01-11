import ProfileTopAva from "../../components/ProfileTopAva";
import s from "./style.module.scss";

const ProfilePage = () => {
  return (
    <div className={s.profileDesk}>
      <div className={s.profileDeskTop}>
        <h3>Профиль</h3>
        <ProfileTopAva />
        <div className={s.profileTopLine}>
          <div
            className={s.profileTopLineItem}
            style={{
              backgroundImage: "url('images/liked.png')",
            }}
          >
            <div className={s.profileItemTitlePlace}>
              <h5>Избранное</h5>
              <h6>12 товаров</h6>
            </div>
          </div>
          <div
            className={s.profileTopLineItem}
            style={{
              backgroundImage: "url('images/viewed.png')",
            }}
          >
            <div className={s.profileItemTitlePlace}>
              <h5>Просмотренное</h5>
              <h6>35 товаров</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={s.profileDeskMenu}>bdf</div>
    </div>
  );
};

export default ProfilePage;
