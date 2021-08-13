import React, { useState, useEffect } from "react";
import {
  deletePricingAlertForUserById,
  fetchAllPricingAlertForUserAction,
} from "../../../API/actions/alertactions/AlertActions.jsx";
import { headers } from "../../../API/tokens/tokens";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import DeleteIcon from "../../../icons/DeleteIcon.jsx";
import InfoIcon from "../../../icons/InfoIcon.jsx";
import PriceTagIcon from "../../../icons/PriceTagIcon.jsx";
const AlertNav = () => {
  const [pricingAlerts, setPricingAlerts] = useState([]);
  const getPricingAlerts = () => {
    fetchAllPricingAlertForUserAction("", headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        if (response.data.response.PriceAlerts != null) {
          alert("تم جلب تنبيهات المستخدم بنجاح");
        }
        setPricingAlerts(response.data.response.PriceAlerts);
      } else {
        alert("حدث خطأ أثناء عملية الجلب");
      }
    });
  };
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const deletePricingAlertById = (id) => {
    deletePricingAlertForUserById(id, headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert('تم عملية حذف التنبيه بنجاح');
        getPricingAlerts();
      } else {
        alert("حدث خطأ أثناء عملية الحذق");
      }
    });
  };
  useEffect(() => {
    getPricingAlerts();
  }, []);
  return (
    <div className="alarm-container">
      <div className="row row-cols-1 row-cols-md-2 g-4 gx-5">
        {pricingAlerts.map((pricingAlert) => (
          <div className="col-sm">
            <BaseCard
              image={pricingAlert.image}
              title={pricingAlert.title}
              price={pricingAlert.price}
              priceTag={<PriceTagIcon />}
              salePrice={pricingAlert.alertPrice}
              onClick={() => goToDetailsPage(pricingAlert.productId)}
              btnText="عرض التفاصيل"
              isFav={false}
              isAlert={true}
              icon={<InfoIcon />}
              alertIcon={<DeleteIcon />}
              alertBtnText="حذف من التنبيهات"
              onClickAlert={() => deletePricingAlertById(pricingAlert.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlertNav;
