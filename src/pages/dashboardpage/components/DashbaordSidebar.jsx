import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <div className="options-section">
      <Link to="/dashboard" className="title">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="لوحة التحكم" />
        </ListItem>{" "}
      </Link>
    </div>
    <div className="options-section">
      <Link to="/add-store" className="title">
        {" "}
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="إضافة متجر" />
        </ListItem>{" "}
      </Link>
    </div>
  </div>
);
