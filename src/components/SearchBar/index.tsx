import { SearchIcon } from "../../features/Icons";
import s from "./style.module.scss";

const SearchBar = () => {
  return (
    <div className={s.searchBar}>
      <SearchIcon />
      <h6 className={s.searchInput}>Товар, бренд или артикул</h6>
    </div>
  );
};

export default SearchBar;
