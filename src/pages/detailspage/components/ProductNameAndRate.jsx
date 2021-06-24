import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import "../../../assets/css/styles.css";
const useStyles = makeStyles((theme) => ({
  rating: {

  },
}));
const ProductNameAndRate = (props) => {
  const classes = useStyles();
  return (
    <div className="name-and-rating">
      <div className="row">
        <p className="name baloo-chettan-30">{props.title}</p>
      </div>
      <div className="row">
        <p className="baloo-20">التصنيف: </p>
        <Rating
          className={classes.rating}
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </div>
    </div>
  );
};
export default ProductNameAndRate;
