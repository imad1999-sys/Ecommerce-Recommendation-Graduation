import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import "../../../assets/css/styles.css";
const useStyles = makeStyles((theme) => ({
  rating: {},
}));
const ProductNameAndRate = (props) => {
  const classes = useStyles();
  return (
    <div className="name-and-rating">
      <div className="row">
        <p className="name tajawal-25">{props.title}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">الماركة التجارية : {props.brand}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">المشاهدات : {props.views}</p>
      </div>
      <div className="row">
        <p className="tajawal-15">الحالة : {props.status}</p>
      </div>
    </div>
  );
};
export default ProductNameAndRate;
