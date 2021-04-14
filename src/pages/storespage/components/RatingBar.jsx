import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
  },
}));

const RatingBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating-read" defaultValue={props.value} readOnly />
    </div>
  );
};
export default RatingBar;
