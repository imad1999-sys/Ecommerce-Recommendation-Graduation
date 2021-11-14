import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import BaseButton from "./BaseButton.jsx";
const BaseCard = (props) => {
  var prodName = JSON.stringify(props.title);
  var prodSub = prodName.substr(0, 40);
  var prodRep = prodSub.replace('["', "");
  var productName = prodRep + " ... ";
  console.log(prodRep + " ... ");
  return (
    <div className="new-card">
      <img className="card-image" src={props.image} />
      <p className="card-text tajawal-15">{productName}</p>
      <p className="card-text tajawal-15">
        {props.currency} {props.salePrice}
      </p>
      <p className="card-text tajawal-15">
        {props.views} {props.viewTag}
      </p>
      <div className="btn-card tajawal-15">
        <BaseButton
          icon={props.icon}
          text={props.btnText}
          onClick={props.onClick}
        />
      </div>
      {props.isFav ? (
        <div className="row">
          <BaseButton
            icon={props.favIcon}
            text={props.favBtnText}
            onClick={props.onClickFav}
          />
        </div>
      ) : (
        ""
      )}
      {props.isAlert ? (
        <div className="row">
          <BaseButton
            icon={props.alertIcon}
            text={props.alertBtnText}
            onClick={props.onClickAlert}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default BaseCard;
