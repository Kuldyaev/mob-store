import { useState } from "react";
import {
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5_b,
  Paragraph5_g,
  CheckBox,
} from "../../components/uikit";
import ProfileTopAva from "../../components/ProfileTopAva";
import { ItemCounter } from "../../components/ItemCounter";
import { DeleteBtn, FavoriteBtn } from "../../components/uikit";
import PopularCategoties from "../../components/PopularCategoties";
import SearchBar from "../../components/SearchBar";
import s from "./style.module.scss";

const ExamplesPage = () => {
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(true);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={s.examplesDesk}>
      <Paragraph1>ExamplesPage</Paragraph1>
      <br />
      <section>
        <h4>CheckBox </h4>
        <CheckBox changeValue={setChecked} checked={checked} />
      </section>
      <section>
        <h4>ItemCounter </h4>
        <ItemCounter quantity={quantity} setQuantity={setQuantity} />
      </section>
      <section>
        <h4>Delete Button </h4>
        <DeleteBtn deleteItem={() => console.log("Delete Item")} />
      </section>
      <section>
        <h4>Favorite Button </h4>
        <FavoriteBtn
          isfavorite={favorite}
          favoreItem={() => setFavorite(!favorite)}
        />
      </section>
      <section>
        <h4>Search bar</h4>
        <SearchBar />
      </section>
      <section>
        <h4>Profile Top Block</h4>
        <ProfileTopAva />
      </section>
      <section>
        <h4>Home Populer Categories</h4>
        <PopularCategoties />
      </section>

      <h3>UI Kit</h3>
      <section>
        <h5>Paragraph1 font-size 24px</h5>
        <Paragraph1> Пример </Paragraph1>
      </section>
      <section>
        <h5>Paragraph font-size 12.5px w700</h5>
        <Paragraph2> Пример </Paragraph2>
      </section>
      <section>
        <h5>Paragraph font-size 12.5px w400</h5>
        <Paragraph3> Пример </Paragraph3>
      </section>
      <section>
        <h5>Paragraph font-size 14.5px w600</h5>
        <Paragraph4> Пример </Paragraph4>
      </section>
      <section>
        <h5>Paragraph font-size 12.5px w400 black</h5>
        <Paragraph5_b> Пример </Paragraph5_b>
      </section>
      <section>
        <h5>Paragraph font-size 12.5px w400 grey</h5>
        <Paragraph5_g> Пример </Paragraph5_g>
      </section>
    </div>
  );
};

export default ExamplesPage;
