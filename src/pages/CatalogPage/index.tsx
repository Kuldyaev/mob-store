import { SearchIcon } from "../../features/Icons";

import s from "./style.module.scss";

const CatalogPage = () => {
  return (
    <div className={s.catalogDesk}>
      <h3>Каталог</h3>
      <div className={s.searchBar}>
        <SearchIcon />
        <h6 className={s.searchInput}>Товар, бренд или артикул</h6>
      </div>
    </div>
  );
};

export default CatalogPage;
