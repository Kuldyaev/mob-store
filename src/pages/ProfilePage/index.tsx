import ProfileTopAva from "../../components/ProfileTopAva";
import {
  ArrowToRight,
  DeliveriesIcon,
  StarIcon,
  SubscribesIcon,
} from "../../features/Icons";
import s from "./style.module.scss";

const menu = [
  {
    id: 0,
    title: "Доставки",
    info: "Ближайшие не ожидаются",
  },
];

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
      <div className={s.profileDeskMenu}>
        <div className={s.profileDeskMenuItem}>
          <div className={s.profileDeskMenuIcon}>
            <div className={s.profileDeskMenuIconPlace}>
              <DeliveriesIcon />
            </div>
          </div>
          <div className={s.profileDeskMenuInfo}>
            <div className={s.profileDeskMenuText}>
              <h4>Доставки</h4>
              <h5>Ближайшие не ожидаются</h5>
            </div>
            <button>
              <ArrowToRight />
            </button>
          </div>
        </div>

        <div className={s.profileDeskMenuItem}>
          <div className={s.profileDeskMenuIcon}>
            <div className={s.profileDeskMenuIconPlace}>
              <StarIcon />
            </div>
          </div>
          <div className={s.profileDeskMenuInfo}>
            <div className={s.profileDeskMenuText}>
              <h4>Покупки</h4>
              <h5>Здесь можно купить что-то заново</h5>
            </div>
            <button>
              <ArrowToRight />
            </button>
          </div>
        </div>

        <div className={s.profileDeskMenuItem}>
          <div className={s.profileDeskMenuIcon}>
            <div className={s.profileDeskMenuIconPlace}>
              <SubscribesIcon />
            </div>
          </div>
          <div className={s.profileDeskMenuInfo}>
            <div className={s.profileDeskMenuText}>
              <h4>Подписки на бренды</h4>
              <h5>Nike, Adidas, New Balance, Puma</h5>
            </div>
            <button>
              <ArrowToRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
