import React, { useState, useEffect } from "react";
import {
  deletePricingAlertForUserById,
  fetchAllPricingAlertForUserAction,
} from "../../../API/actions/alertactions/AlertActions.jsx";
import { headers } from "../../../API/tokens/tokens";
import "../../../assets/css/styles.css";
import BaseCard from "../../../base/BaseCard";
import { InfoIcon, PriceTagIcon, DeleteIcon } from "../../../icons/icons.jsx";
const AlertNav = () => {
  const [pricingAlerts, setPricingAlerts] = useState([]);
  const getPricingAlerts = () => {
    fetchAllPricingAlertForUserAction("", headers).then((response) => {
      console.log(response);
      setPricingAlerts(response.data.response.PriceAlerts);
    });
  };
  const goToDetailsPage = (id) => {
    window.location.href = "/details/" + id;
  };
  const deletePricingAlertById = (id) => {
    deletePricingAlertForUserById(id, headers).then((response) => {
      console.log(response);
      if (response.status < 300) {
        alert("تم عملية حذف التنبيه بنجاح");
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
    <div className="row">
      <div className="alarm-container">
        <div className="row row-cols-1 row-cols-md-4 g-4 gx-5">
          {pricingAlerts.map((pricingAlert) => (
            <div className="col">
              <BaseCard
                image={pricingAlert.image}
                title={pricingAlert.title}
                price={pricingAlert.price}
                currency={pricingAlert.currency}
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
    </div>
  );
};
export default AlertNav;
