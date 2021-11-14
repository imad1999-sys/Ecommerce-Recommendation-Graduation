import React, { useEffect, useState } from "react";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import {
  deleteUserFavoriteById,
  fetchUserFavoritesAction,
} from "../../../API/actions/favoritesactions/FavoritesAction";
import { headers } from "../../../API/tokens/tokens.jsx";
import {
  EyeIcon,
  InfoIcon,
  PriceTagIcon,
  DeleteIcon,
} from "../../../icons/icons";

const FavoritesNav = () => {
  const [favorites, setFavorites] = useState([]);
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const getFavorites = () => {
    fetchUserFavoritesAction("", headers).then((response) => {
      setFavorites(response.data.response.favorites);
    });
  };
  const deleteFavoriteById = (id, id2) => {
    deleteUserFavoriteById(id, headers).then((response) => {
      if (response.status < 300) {
        getFavorites();
      }
    });
  };
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div className="row">
      <div className="alarm-container">
        <div className="row row-cols-1 row-cols-md-4 g-4 gx-5">
          {favorites.map((favorite) => (
            <div className="col">
              <BaseCard
                image={favorite.product.image}
                title={favorite.product.title}
                price={favorite.product.price}
                currency={favorite.product.currency}
                priceTag={<PriceTagIcon />}
                salePrice={favorite.product.salePrice}
                views={favorite.product.views}
                viewTag={<EyeIcon />}
                onClick={() => goToDetailsPage(favorite.product.id)}
                btnText="عرض التفاصيل"
                isFav={true}
                isAlert={false}
                icon={<InfoIcon />}
                favIcon={<DeleteIcon />}
                favBtnText="حذف من المفضلة"
                onClickFav={() =>
                  deleteFavoriteById(favorite.favoriteId, favorite.product.id)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FavoritesNav;
