import React from "react";
import img from "../assets/images/amazon.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBoder from "@material-ui/icons/FavoriteBorder";
import {Link} from "react-router-dom";
import "../assets/css/styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    padding: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    outline: 0,
    color: "#888",
    fontSize: 10,
  },
  img: {
    opacity: 1,
    display: "inline",
    maxHeight: "33px",
    cursor: "pointer",
    width: "80px",
    marginTop: "5px",
    marginBottom: "5px",
    marginRight: "35px",
  },
  Favorite: {
    width: 20,
    height: 30,
    marginLeft: 180,
  },
}));
const Card = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className="base-card">
        <Checkbox
          className={classes.Favorite}
          icon={<FavoriteBoder />}
          checkedIcon={<Favorite />}
        />
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="first-card-text">
            <small className="small-text baloo-20">{props.name}</small>
          </p>
          <h5 class="card-title">SAR {props.price}</h5>
        </div>
        <ButtonGroup
          orientation="vertical"
          color="#444"
          aria-label="vertical contained primary button group"
          variant="text"
        >
          <Link to={props.link} className={classes.button}>
            {" "}
            <img
              src={img}
              class="card-img-top"
              alt="..."
              className={classes.img}
            />
            Book now
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default Card;
