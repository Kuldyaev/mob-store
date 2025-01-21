import { useState } from "react";
import ProfileTopAva from "@/components/ProfileTopAva";
import { Paragraph1 } from "@/components/uikit";
import ProfileBrands from "@/components/ProfileMenuItems/ProfileBrands";

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
import cn from "classnames";
import s from "./style.module.scss";

const menu = [
  {
    id: 0,
    title: "Доставки",
    info: "Ближайшие не ожидаются",
    icon: deliveriesIconSVG,
    name: "deliveries",
  },
  {
    id: 1,
    title: "Покупки",
    info: "Здесь можно купить что-то заново",
    icon: starIconSVG,
    name: "shopping",
  },
  {
    id: 2,
    title: "Подписки на бренды",
    info: "Nike, Adidas, New Balance, Puma",
    icon: subscribeIconSVG,
    name: "brands",
  },
  {
    id: 3,
    title: "Скидки месяца",
    info: "До -30%. Выбирайте на декабрь",
    icon: discountsIconSVG,
    name: "discount",
  },
  {
    id: 4,
    title: "Мои адреса",
    info: "Доставим в любой город России",
    icon: deliveryIconSVG,
    name: "adress",
  },
  {
    id: 5,
    title: "Отзывы и вопросы",
    info: "Делитесь мнением и узнавайте о товарах",
    icon: messageIconSVG,
    name: "faq",
  },
  {
    id: 6,
    title: "Пригласите друга",
    info: "Получите 500₽",
    icon: inviteFrendIconSVG,
    name: "refferal",
  },
  {
    id: 7,
    title: "Промокоды",
    info: "Собрали их в одном месте",
    icon: promoCodesIconSVG,
    name: "promo",
  },
  {
    id: 8,
    title: "Связаться с нами",
    info: "Предложения и пользовательские вопросы",
    icon: telegramIconSVG,
    name: "contacts",
  },
  {
    id: 9,
    title: "О сервисе",
    info: "Публичная оферта и политика конфиденциальности",
    icon: documentIconSVG,
    name: "about3423",
  },
];

const ProfilePage = () => {
  const [activeMenuScreen, setActiveMenuScreen] = useState<string>("main");

  const showMenuItem = (name: string) => {
    window.scrollTo(0, 0);
    if (Boolean(menu.find((item) => item.name === name))) {
      setActiveMenuScreen(name);
    } else {
      setActiveMenuScreen("main");
    }
  };

  const hideMenuItem = () => {
    setActiveMenuScreen("main");
  };

  return (
    <div className={s.profileDesk}>
      <div className={s.mainDesk}>
        <div className={s.profileDeskTop}>
          <Paragraph1>Профиль</Paragraph1>
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
            <div className={s.profileDeskMenuItem} key={item.id}>
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
                <button onClick={() => showMenuItem(item.name)}>
                  <ArrowToRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          s.secondDesk,
          activeMenuScreen === "main" ? s.hidden : s.showed
        )}
      >
        <button onClick={hideMenuItem}>назад</button>
        {activeMenuScreen === "brands" && (
          <ProfileBrands
            title="Подписки на бренды"
            onClickBack={hideMenuItem}
          />
        )}
        {activeMenuScreen === "shopping" && <div>Покупки</div>}
        {activeMenuScreen === "deliveries" && <div>Доставки</div>}
        {activeMenuScreen === "promo" && <div>Промокоды</div>}
        {activeMenuScreen === "about" && <div>О сервисе</div>}
        {activeMenuScreen === "adress" && <div>Мои адреса</div>}
        {activeMenuScreen === "discount" && <div>Скидки месяца</div>}
        {activeMenuScreen === "refferal" && <div>Пригласите друга</div>}
        {activeMenuScreen === "faq" && <div>Отзывы и вопросы</div>}
        {activeMenuScreen === "contacts" && <div>Связаться с нами</div>}
        {activeMenuScreen === "settings" && <div>Настройки</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
