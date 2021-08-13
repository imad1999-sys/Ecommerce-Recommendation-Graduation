import React, { useState, useEffect } from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import { fetchAllProductsAction } from "../../../API/actions/productactions/ProductActions.jsx";
import InfoIcon from "../../../icons/InfoIcon.jsx";
import PriceTagIcon from "../../../icons/PriceTagIcon.jsx";
import EyeIcon from "../../../icons/EyeIcon.jsx";
import { headers } from "../../../API/tokens/tokens.jsx";
const CarouselOfCompanies = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAllProductsAction("", headers).then((response) => {
      console.log(response.data.response.products.content);
      if (response.status < 300) {
        alert("تم جلب كافة المنتجات بنجاح");
        setProducts(response.data.response.products.content);
      } else {
        alert("حدث خطأ أثناء عملية الجلب");
      }
    });
  }, []);
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  return (
    <div>
      <div className="container-for-cards">
        <div className="row row-cols-1 row-cols-md-2 g-4 gx-5">
          {products.map((product) => (
            <div className="col-sm">
              <BaseCard
                image={product.image}
                title={product.title}
                price={product.price}
                priceTag={<PriceTagIcon />}
                salePrice={product.salePrice}
                views={product.views}
                viewTag={<EyeIcon />}
                onClick={() => goToDetailsPage(product.id)}
                btnText="عرض التفاصيل"
                isFav = {false}
                isAlert = {false}
                icon={<InfoIcon />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselOfCompanies;
