import React from "react";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const baseButton = (props) => {
    return (
      <div className="button-section">
        <div className="d-grid gap-2 col-6 mx-auto">
          <a
            href="#"
            className="btn btn-outline-primary btn-link baloo-20"
            type="button"
          >
            {props.icon} {props.text}
          </a>
        </div>
      </div>
    );
}
export default baseButton;