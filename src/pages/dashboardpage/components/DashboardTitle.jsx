import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    direction: "rtl",
  },
});

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
      className={classes.title}
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
