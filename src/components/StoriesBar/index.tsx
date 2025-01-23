import s from "./style.module.scss";

const data = [
  {
    id: 0,
    title: "Календарь",
    img: "story1.png",
  },
  {
    id: 1,
    title: "Акции",
    img: "story2.png",
  },
  {
    id: 2,
    title: "Мастхэв",
    img: "story3.png",
  },
  {
    id: 3,
    title: "М-25%",
    img: "story4.png",
  },
  {
    id: 4,
    title: "Красота",
    img: "story1.png",
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
      <div className={s.storiesBottom}></div>
    </div>
  );
};

export default StoriesBar;
