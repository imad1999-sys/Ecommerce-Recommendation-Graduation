import React, { useEffect, useState } from "react";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import {
  deleteUserFavoriteById,
  fetchUserFavoritesAction,
} from "../../../API/actions/favoritesactions/FavoritesAction";
import { headers } from "../../../API/tokens/tokens.jsx";
import PriceTagIcon from "../../../icons/PriceTagIcon";
import EyeIcon from "../../../icons/EyeIcon";
import InfoIcon from "../../../icons/InfoIcon";
import DeleteIcon from "../../../icons/DeleteIcon";
const FavoritesNav = () => {
  const [favorites, setFavorites] = useState([]);
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const getFavorites = () => {
    fetchUserFavoritesAction("", headers).then((response) => {
      if (response.status < 300) {
        if (response.data.response.favorites != null) {
          alert("تم جلب مفضلات المستخدم بنجاح");
        }
        setFavorites(response.data.response.favorites);
      } else {
        alert("حدث خطأ أثناء عملية الجلب");
      }
    });
  };
  const deleteFavoriteById = (id) => {
    deleteUserFavoriteById(id, headers).then((response) => {
      if (response.status < 300) {
        alert("تم حذف المفضلة بنجاح");
        getFavorites();
      } else {
        alert("حدث خطأ أثناء عملية الحذف");
      }
    });
  };
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <div className="favorites-container">
      <div className="row row-cols-1 row-cols-md-2 g-4 gx-5">
        {favorites.map((favorite) => (
          <div className="col-sm">
            <BaseCard
              image={favorite.product.image}
              title={favorite.product.title}
              price={favorite.product.price}
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
              onClickFav={() => deleteFavoriteById(favorite.favoriteId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FavoritesNav;
