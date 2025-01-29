import { useState, lazy, Suspense, useEffect, useRef } from "react";
import { dispatch, useSelector } from "@/store";
import { setHeaderFixedShowed } from "@/store/slices/status";
import ProfileTopAva from "@/components/ProfileTopAva";
import {
  Typograph_24,
  Typograph_14_5,
  Typograph_12_5,
  Typograph_11_5,
} from "@/components/uikit";
import Loader from "@/components/Loader";
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
} from "@/features/Icons";
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

const ProfileSettings = lazy(
  () => import("@/components/ProfileMenuItems/ProfileSettings")
);

const ProfilePromo = lazy(
  () => import("@/components/ProfileMenuItems/ProfilePromo")
);

const ProfileAbout = lazy(
  () => import("@/components/ProfileMenuItems/ProfileAbout")
);

const ProfileContacts = lazy(
  () => import("@/components/ProfileMenuItems/ProfileContacts")
);

const ProfileAddress = lazy(
  () => import("@/components/ProfileMenuItems/ProfileAddress")
);

const ProfileDiscount = lazy(
  () => import("@/components/ProfileMenuItems/ProfileDiscount")
);

const ProfileRefferal = lazy(
  () => import("@/components/ProfileMenuItems/ProfileRefferal")
);

const ProfileFaq = lazy(
  () => import("@/components/ProfileMenuItems/ProfileFaq")
);

const ProfileFavorites = lazy(
  () => import("@/components/ProfileMenuItems/ProfileFavorites")
);

const ProfileViewed = lazy(
  () => import("@/components/ProfileMenuItems/ProfileViewed")
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
    name: "address",
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
    name: "about",
  },
];

const ProfilePage = () => {
  const [activeMenuScreen, setActiveMenuScreen] = useState<string>("main");
  const elRef = useRef<HTMLDivElement | null>(null);
  const isShowed = useSelector((state) => state.status.headerFixed.isShowed);

  const handleScroll = () => {
    if (elRef.current) {
      const rect = elRef.current.getBoundingClientRect();

      dispatch(
        setHeaderFixedShowed(Math.round((+rect.top * 17.727) / +rect.width) < 1)
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div
        className={cn(
          s.secondDesk,
          activeMenuScreen === "main" ? s.hidden : s.showed
        )}
      >
        {activeMenuScreen === "brands" && (
          <Suspense fallback={<Loader />}>
            <ProfileBrands
              title="Подписки на бренды"
              onClickBack={hideMenuItem}
            />
          </Suspense>
        )}
        {activeMenuScreen === "shopping" && (
          <Suspense fallback={<Loader />}>
            <ProfileOrders title="Покупки" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "deliveries" && (
          <Suspense fallback={<Loader />}>
            <ProfileDeliveries title="Доставки" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "promo" && (
          <Suspense fallback={<Loader />}>
            <ProfilePromo title="Промокоды" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "about" && (
          <Suspense fallback={<Loader />}>
            <ProfileAbout title="О сервисе" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "address" && (
          <Suspense fallback={<Loader />}>
            <ProfileAddress title="Мои адреса" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "discount" && (
          <Suspense fallback={<Loader />}>
            <ProfileDiscount
              title="Ваши скидки в декабре"
              onClickBack={hideMenuItem}
            />
          </Suspense>
        )}
        {activeMenuScreen === "refferal" && (
          <Suspense fallback={<Loader />}>
            <ProfileRefferal
              title="Скидки для вас и ваших друзей"
              onClickBack={hideMenuItem}
            />
          </Suspense>
        )}
        {activeMenuScreen === "faq" && (
          <Suspense fallback={<Loader />}>
            <ProfileFaq title="Отзывы и вопросы" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "contacts" && (
          <Suspense fallback={<Loader />}>
            <ProfileContacts
              title="Связаться с нами"
              onClickBack={hideMenuItem}
            />
          </Suspense>
        )}
        {activeMenuScreen === "settings" && (
          <Suspense fallback={<Loader />}>
            <ProfileSettings title="Настройки" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "favorites" && (
          <Suspense fallback={<Loader />}>
            <ProfileFavorites title="Избранное" onClickBack={hideMenuItem} />
          </Suspense>
        )}
        {activeMenuScreen === "viewed" && (
          <Suspense fallback={<Loader />}>
            <ProfileViewed title="Просмотренное" onClickBack={hideMenuItem} />
          </Suspense>
        )}
      </div>
      <div className={cn(s.headerFixedSub, "flex-row-center-center")}></div>
      <div className={s.profileDesk} ref={elRef}>
        <div className={s.mainDesk}>
          <div className={s.profileDeskTop}>
            <div
              className={cn(s.smallTitle, isShowed ? s.opacity0 : s.opacity1)}
            >
              <Typograph_24>Профиль</Typograph_24>
            </div>
            <ProfileTopAva onClick={() => setActiveMenuScreen("settings")} />
            <div className={s.profileTopLine}>
              <div
                className={s.profileTopLineItem}
                style={{
                  backgroundImage: "url('images/liked.png')",
                }}
                onClick={() => setActiveMenuScreen("favorites")}
              >
                <div className={s.profileItemTitlePlace}>
                  <Typograph_14_5>Избранное</Typograph_14_5>
                  <Typograph_12_5 color="grey">12 товаров</Typograph_12_5>
                </div>
              </div>
              <div
                className={s.profileTopLineItem}
                style={{
                  backgroundImage: "url('images/viewed.png')",
                }}
                onClick={() => setActiveMenuScreen("viewed")}
              >
                <div className={s.profileItemTitlePlace}>
                  <Typograph_14_5>Просмотренное</Typograph_14_5>
                  <Typograph_12_5 color="grey">35 товаров</Typograph_12_5>
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
                    <Typograph_14_5 fw="fw400" spacing={null}>
                      {item.title}
                    </Typograph_14_5>
                    <Typograph_11_5 color="grey">{item.info}</Typograph_11_5>
                  </div>
                  <button onClick={() => showMenuItem(item.name)}>
                    <ArrowToRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
