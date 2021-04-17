import React from "react";
import "../../../assets/css/styles.css";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: theme.spacing(50),
  },
  margin: {
    margin: theme.spacing(4),
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: "Baloo-2",
  },
});
const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div className="search-bar">
      <ThemeProvider theme={theme}>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
        >
          <InputLabel htmlFor="filled-adornment-amount">
            {props.label}
          </InputLabel>
          <FilledInput id="filled-adornment-amount" endAdornment={props.icon} />
        </FormControl>
      </ThemeProvider>
    </div>
  );
};
export default SearchBar;
