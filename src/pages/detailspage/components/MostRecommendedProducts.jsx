import React from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import laptop from "../../../assets/images/laptop.jpg";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { EyeIcon, InfoIcon, PriceTagIcon } from "../../../icons/icons.jsx";

const MostRecommendedProducts = (props) => {
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  return (
    <div className="rated-container">
      <div className="row">
        <p className="tajawal-25">منتجات مشابهة</p>
      </div>
      <div className="most-recommended-container">
        <div className="row">
          {props.recommendProducts.map((product, index) => (
            <div className="col-sm-3">
              <BaseCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                priceTag={<PriceTagIcon />}
                salePrice={product.sale_price}
                currency={product.currency}
                views={product.views}
                viewTag={<EyeIcon />}
                onClick={() => goToDetailsPage(product.id)}
                btnText="عرض التفاصيل"
                isFav={false}
                isAlert={false}
                icon={<InfoIcon />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MostRecommendedProducts;
