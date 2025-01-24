import {
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5_b,
  Paragraph5_g,
  Paragraph6,
  Paragraph7,
  Paragraph8,
} from "@/components/uikit";

import s from "./style.module.scss";

const ExamplesPage = () => {
  return (
    <div className={s.examplesDesk}>
      <Paragraph1>ExamplesPage</Paragraph1>
      <br />

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
        <h5>Paragraph5_b font-size 12.5px w400 black</h5>
        <Paragraph5_b> Пример </Paragraph5_b>
      </section>
      <section>
        <h5>Paragraph5_g font-size 12.5px w400 grey</h5>
        <Paragraph5_g> Пример </Paragraph5_g>
      </section>
      <section>
        <h5>Paragraph6 font-size 19px w700</h5>
        <Paragraph6> Пример </Paragraph6>
      </section>
      <section>
        <h5> Paragraph7 font-size 12px w600</h5>
        <Paragraph7> Пример </Paragraph7>
      </section>
      <section>
        <h5> Paragraph8 font-size 12px w400</h5>
        <Paragraph8> Пример </Paragraph8>
      </section>
    </div>
  );
};

export default ExamplesPage;
