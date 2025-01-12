import ProfileTopAva from "../../components/ProfileTopAva";
import {
  ArrowToRight,
  starIconSVG,
  subscribeIconSVG,
  deliveriesIconSVG,
  discountsIconSVG,
  deliveryIconSVG,
  messageIconSVG,
  inviteFrendIconSVG,
  promoCodesIconSVG,
  telegramIconSVG,
  documentIconSVG,
} from "../../features/Icons";
import s from "./style.module.scss";

const menu = [
  {
    id: 0,
    title: "Доставки",
    info: "Ближайшие не ожидаются",
    icon: deliveriesIconSVG,
  },
  {
    id: 1,
    title: "Покупки",
    info: "Здесь можно купить что-то заново",
    icon: starIconSVG,
  },
  {
    id: 2,
    title: "Подписки на бренды",
    info: "Nike, Adidas, New Balance, Puma",
    icon: subscribeIconSVG,
  },
  {
    id: 3,
    title: "Скидки месяца",
    info: "До -30%. Выбирайте на декабрь",
    icon: discountsIconSVG,
  },
  {
    id: 4,
    title: "Мои адреса",
    info: "Доставим в любой город России",
    icon: deliveryIconSVG,
  },
  {
    id: 5,
    title: "Отзывы и вопросы",
    info: "Делитесь мнением и узнавайте о товарах",
    icon: messageIconSVG,
  },
  {
    id: 6,
    title: "Пригласите друга",
    info: "Получите 500₽",
    icon: inviteFrendIconSVG,
  },
  {
    id: 7,
    title: "Промокоды",
    info: "Собрали их в одном месте",
    icon: promoCodesIconSVG,
  },
  {
    id: 8,
    title: "Связаться с нами",
    info: "Предложения и пользовательские вопросы",
    icon: telegramIconSVG,
  },
  {
    id: 9,
    title: "О сервисе",
    info: "Публичная оферта и политика конфиденциальности",
    icon: documentIconSVG,
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
        {menu.map((item) => (
          <div className={s.profileDeskMenuItem}>
            <div className={s.profileDeskMenuIcon}>
              <div className={s.profileDeskMenuIconPlace}>
                <img src={item.icon} alt="DeliveryIcon" />
              </div>
            </div>
            <div className={s.profileDeskMenuInfo}>
              <div className={s.profileDeskMenuText}>
                <h4>{item.title}</h4>
                <h5>{item.info}</h5>
              </div>
              <button>
                <ArrowToRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
