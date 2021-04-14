import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "2px solid #1e272e",
  },
}));

export default function AvatarImage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={props.alt} src={props.image} className={classes.large} />
    </div>
  );
}
