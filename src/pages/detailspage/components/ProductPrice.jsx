import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import PricingAlertModal from "./PricingAlertModal.jsx";
import { addProductToFavorites } from "../../../API/actions/favoritesactions/FavoritesAction.jsx";
import { headers } from "../../../API/tokens/tokens";
import { StarIcon, BellIcon, AddIcon, CloseIcon , PenIcon } from "../../../icons/icons";
import { addLogAction } from "../../../API/actions/loggsactions/LoggsActions";
import ReviewModal from "./ReviewModal.jsx";
const ProductPrice = (props) => {
  const addToFavorites = () => {
    const productId = props.id;
    let jsonItem = { productId };
    addProductToFavorites(jsonItem, headers).then((response) => {
      if (response.status < 300) {
        alert(response.data.response);
        addLogAction(productId , "add_to_favorite" , headers);
        console.log(response);
      } else {
        alert("حدث خطأ أتناء عملية الإضافة");
      }
    });
  };
  return (
    <div className="price-container">
      <p className="tajawal-25">السعر & تنبيهات الاسعار & المفضلة</p>
      <div className="row">
        <p className="tajawal-15 sale-price">
          السعر : {props.price} {props.currency}
        </p>
      </div>
      <div className="row">
        <p className="tajawal-15">
          سعر المبيع : {props.salePrice} {props.currency}
        </p>
      </div>
      <div className="row">
        <div className="col-4">
          <PricingAlertModal
            modalIcon={<BellIcon />}
            btnModalText="تنبيه الأسعار"
            btnModalClickText="أضف التنبيه"
            modalTitle="تنبيهات الأسعار"
            email={props.email}
            productId={props.id}
            closeIcon={<CloseIcon />}
            addIcon={<AddIcon />}
          />
        </div>
        <div className="col-4">
          <ReviewModal
            modalIcon={<PenIcon />}
            btnModalText="التقييم"
            btnModalClickText="أضف التقييم"
            modalTitle="تقييم المنتج"
            siteName={props.siteName}
            productId={props.id}
            closeIcon={<CloseIcon />}
            addIcon={<AddIcon />}
          />
        </div>
        <div className="col-4">
          <button
            class="btn btn-outline-primary tajawal-15"
            onClick={addToFavorites}
          >
            <StarIcon />
            إضافة الى المفضلة
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductPrice;
