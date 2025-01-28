import { useState } from "react";
import {
  Paragraph4,
  Paragraph7,
  Paragraph8,
  Paragraph11,
} from "../../components/uikit";
import { ClockIcon } from "./../../features/Icons";
import { FavoriteBtn } from "../../components/uikit";
import cn from "classnames";
import s from "./style.module.scss";

const SalomonUltra = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={s.category}>
      <div className={s.popcatLine}>
        <div className={s.popcatLineItem}>
          <div
            className={cn(s.popcatLineItemImg)}
            style={{
              backgroundImage: "url('images/" + "salomon" + ".png')",
            }}
          >
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <div className={s.colors}>
              <div className={s.colorCircles}>
                <div
                  className={s.colorCircle}
                  style={{
                    backgroundColor: "#80D262",
                  }}
                ></div>
                <div
                  className={cn(s.colorCircle, s.colorCircleSecond)}
                  style={{
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <h6>+2</h6>
            </div>
          </div>
          <Paragraph7>Salomon</Paragraph7>
          <Paragraph8>
            Ботинки Salomon X Ultra 4 Mid GORE-TEX «Sha...
          </Paragraph8>
          <div className={s.infoline}>
            <ClockIcon />
            <Paragraph11>Доставка 5-10 дней</Paragraph11>
          </div>
          <Paragraph4>
            16 090 <span>₽</span>
          </Paragraph4>
        </div>

        <div className={s.popcatLineItem}>
          <div
            className={cn(s.popcatLineItemImg)}
            style={{
              backgroundImage: "url('images/" + "salomon" + ".png')",
            }}
          >
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <div className={s.colors}>
              <div className={s.colorCircles}>
                <div
                  className={s.colorCircle}
                  style={{
                    backgroundColor: "#80D262",
                  }}
                ></div>
                <div
                  className={cn(s.colorCircle, s.colorCircleSecond)}
                  style={{
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <h6>+2</h6>
            </div>
          </div>
          <Paragraph7>Salomon</Paragraph7>
          <Paragraph8>
            Ботинки Salomon X Ultra 4 Mid GORE-TEX «Sha...
          </Paragraph8>
          <div className={s.infoline}>
            <ClockIcon />
            <Paragraph11>Доставка 5-10 дней</Paragraph11>
          </div>
          <Paragraph4>
            16 090 <span>₽</span>
          </Paragraph4>
        </div>

        <div className={s.popcatLineItem}>
          <div
            className={cn(s.popcatLineItemImg)}
            style={{
              backgroundImage: "url('images/" + "salomon" + ".png')",
            }}
          >
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <div className={s.colors}>
              <div className={s.colorCircles}>
                <div
                  className={s.colorCircle}
                  style={{
                    backgroundColor: "#80D262",
                  }}
                ></div>
                <div
                  className={cn(s.colorCircle, s.colorCircleSecond)}
                  style={{
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <h6>+2</h6>
            </div>
          </div>
          <Paragraph7>Salomon</Paragraph7>
          <Paragraph8>
            Ботинки Salomon X Ultra 4 Mid GORE-TEX «Sha...
          </Paragraph8>
          <div className={s.infoline}>
            <ClockIcon />
            <Paragraph11>Доставка 5-10 дней</Paragraph11>
          </div>
          <Paragraph4>
            16 090 <span>₽</span>
          </Paragraph4>
        </div>

        <div className={s.popcatLineItem}>
          <div
            className={cn(s.popcatLineItemImg)}
            style={{
              backgroundImage: "url('images/" + "salomon" + ".png')",
            }}
          >
            <FavoriteBtn
              isfavorite={favorite}
              favoreItem={() => setFavorite(!favorite)}
            />
            <div className={s.colors}>
              <div className={s.colorCircles}>
                <div
                  className={s.colorCircle}
                  style={{
                    backgroundColor: "#80D262",
                  }}
                ></div>
                <div
                  className={cn(s.colorCircle, s.colorCircleSecond)}
                  style={{
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              <h6>+2</h6>
            </div>
          </div>
          <Paragraph7>Salomon</Paragraph7>
          <Paragraph8>
            Ботинки Salomon X Ultra 4 Mid GORE-TEX «Sha...
          </Paragraph8>
          <div className={s.infoline}>
            <ClockIcon />
            <Paragraph11>Доставка 5-10 дней</Paragraph11>
          </div>
          <Paragraph4>
            16 090 <span>₽</span>
          </Paragraph4>
        </div>
      </div>
      <div className={s.popBottom}></div>
    </div>
  );
};

export default SalomonUltra;
