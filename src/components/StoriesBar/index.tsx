import cn from "classnames";
import s from "./style.module.scss";

const StoriesBar = () => {
  return (
    <div className={s.stories}>
      <div className={s.storiesLine}>
        <div className={s.storiesLineItem}>
          <div className={s.storiesImgPlace}>
            <div className={s.whiteCircle}>
              <div
                className={s.imgCircle}
                style={{
                  backgroundImage: "url('images/" + "story1" + ".png')",
                }}
              ></div>
            </div>
          </div>
          <h6>Календарь</h6>
        </div>
        <div className={s.storiesLineItem}>
          <div className={s.storiesImgPlace}>
            <div className={s.whiteCircle}>
              <div
                className={s.imgCircle}
                style={{
                  backgroundImage: "url('images/" + "story2" + ".png')",
                }}
              ></div>
            </div>
          </div>
          <h6>Акции</h6>
        </div>
        <div className={s.storiesLineItem}>
          <div className={s.storiesImgPlace}>
            <div className={s.whiteCircle}>
              <div
                className={s.imgCircle}
                style={{
                  backgroundImage: "url('images/" + "story3" + ".png')",
                }}
              ></div>
            </div>
          </div>
          <h6>Мастхэв</h6>
        </div>
        <div className={s.storiesLineItem}>
          <div className={s.storiesImgPlace}>
            <div className={s.whiteCircle}>
              <div
                className={s.imgCircle}
                style={{
                  backgroundImage: "url('images/" + "story4" + ".png')",
                }}
              ></div>
            </div>
          </div>
          <h6>-25%</h6>
        </div>
        <div className={s.storiesLineItem}>
          <div className={s.storiesImgPlace}>
            <div className={s.whiteCircle}>
              <div
                className={s.imgCircle}
                style={{
                  backgroundImage: "url('images/" + "story1" + ".png')",
                }}
              ></div>
            </div>
          </div>
          <h6>Красота</h6>
        </div>
      </div>
      <div className={s.storiesBottom}></div>
    </div>
  );
};

export default StoriesBar;
