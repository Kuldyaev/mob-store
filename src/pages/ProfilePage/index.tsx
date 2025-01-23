import { useState, lazy, Suspense, useEffect, useRef } from "react";
import ProfileTopAva from "@/components/ProfileTopAva";
import { Paragraph1, Paragraph9 } from "@/components/uikit";

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

const ProfileBrands = lazy(
  () => import("@/components/ProfileMenuItems/ProfileBrands")
);

const ProfileDeliveries = lazy(
  () => import("@/components/ProfileMenuItems/ProfileDeliveries")
);

const ProfileOrders = lazy(
  () => import("@/components/ProfileMenuItems/ProfileOrders")
);

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
  const elRef = useRef<HTMLDivElement | null>(null);
  const [isShowedFixHeader, setIsShowedFixHeader] = useState<boolean>(false);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      if (isShowedFixHeader) {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      } else {
        setIsShowedFixHeader(
          Math.round((+rect.top * 17.727) / +rect.width) < 1
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <div className={cn(s.headerFixed, "flex-row-center-center")}>
        <div
          className={cn(
            s.infoBlock,
            "flex-column-center-center",
            isShowedFixHeader ? s.opacity1 : s.opacity0
          )}
        >
          <Paragraph9>Профиль</Paragraph9>
        </div>
      </div>
      <div className={s.profileDesk} ref={elRef}>
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
          <div
            className={s.profileDeskMenu}
            style={{ display: activeMenuScreen === "main" ? "flex" : "none" }}
          >
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
          {activeMenuScreen === "brands" && (
            <Suspense fallback={<div>Loading...</div>}>
              <ProfileBrands
                title="Подписки на бренды"
                onClickBack={hideMenuItem}
              />
            </Suspense>
          )}
          {activeMenuScreen === "shopping" && (
            <Suspense fallback={<div>Loading...</div>}>
              <ProfileOrders title="Покупки" onClickBack={hideMenuItem} />
            </Suspense>
          )}
          {activeMenuScreen === "deliveries" && (
            <Suspense fallback={<div>Loading...</div>}>
              <ProfileDeliveries title="Доставки" onClickBack={hideMenuItem} />
            </Suspense>
          )}
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
    </>
  );
};

export default ProfilePage;
