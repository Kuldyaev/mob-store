import s from "./style.module.scss";

const data = [
  {
    id: 0,
    title: "О нас",
    img: "story1.png",
  },
  {
    id: 1,
    title: "Доставка",
    img: "story2.png",
  },
  {
    id: 2,
    title: "В тренде",
    img: "story3.png",
  },
  {
    id: 3,
    title: "Релизы",
    img: "story4.png",
  },
  {
    id: 4,
    title: "Образы",
    img: "story1.png",
  },
  {
    id: 5,
    title: "Подборки",
    img: "story3.png",
  },
];

const StoriesBar = () => {
  return (
    <div className={s.stories}>
      <div className={s.storiesLine}>
        {data.map((item) => (
          <div className={s.storiesLineItem} key={item.id}>
            <div className={s.storiesImgPlace}>
              <div className={s.whiteCircle}>
                <div
                  className={s.imgCircle}
                  style={{
                    backgroundImage: "url('images/" + item.img + "')",
                  }}
                ></div>
              </div>
            </div>
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
