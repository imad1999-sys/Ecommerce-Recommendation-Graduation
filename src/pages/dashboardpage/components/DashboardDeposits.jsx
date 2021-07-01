import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./DashboardTitle";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    direction: "rtl",
  },
  depositAmount: {
    direction: "rtl",
  },
  depositLink: {
    direction: "rtl",
  },
});

 function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>الودائع الحالية</Title>
      <Typography component="p" variant="h4" className={classes.depositAmount}>
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        في كانون الاول 2020
      </Typography>
      <Link
        color="primary"
        href="#"
        onClick={preventDefault}
        className={classes.depositLink}
      >
        إظهار الرصيد
      </Link>
    </React.Fragment>
  );
}
export default Deposits;