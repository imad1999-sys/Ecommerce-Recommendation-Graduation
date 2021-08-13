import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import { Link } from "react-router-dom";
const baseButton = (props) => {
  return (
    <div className="button-section">
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link
          onClick={props.onClick}
          className="btn btn-outline-primary btn-link tajawal-15"
          type="button"
        >
          {props.text} {props.icon}
        </Link>
      </div>
    </div>
  );
};
export default baseButton;
