import { FC } from "react";
import { FavoriteIcon } from "./../../../../features/Icons";
import cn from "classnames";
import s from "./style.module.scss";

interface FavoriteBtnProps {
  isfavorite: boolean;
  favoreItem: () => void;
}

export const FavoriteBtn: FC<FavoriteBtnProps> = ({
  isfavorite,
  favoreItem,
}) => {
  return (
    <button
      className={cn(s.favoriteBtn, isfavorite ? s.favorite : undefined)}
      onClick={favoreItem}
      style={{ backgroundColor: "white" }}
    >
      <FavoriteIcon />
    </button>
  );
};
