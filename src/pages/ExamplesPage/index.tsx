import { Paragraph1 } from "../../components/uikit";
import ProfileTopAva from "../../components/ProfileTopAva";
import PopularCategoties from "../../components/PopularCategoties";
import SearchBar from "../../components/SearchBar";
import s from "./style.module.scss";

const ExamplesPage = () => {
  return (
    <div className={s.examplesDesk}>
      <Paragraph1>ExamplesPage</Paragraph1>
      <br />
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
        <h4>Paragraph1</h4>
        <Paragraph1> Пример </Paragraph1>
      </section>
    </div>
  );
};

export default ExamplesPage;
