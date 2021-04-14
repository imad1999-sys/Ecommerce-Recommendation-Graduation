import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../../../assets/css/styles.css";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 1,
  },
}));

const AvatarImage = (props) => {
  const classes = useStyles();
  return (
    <div className="avatar-root">
      <Avatar alt={props.alt} src={props.image} className={classes.large} />
    </div>
  );
};
export default AvatarImage;
