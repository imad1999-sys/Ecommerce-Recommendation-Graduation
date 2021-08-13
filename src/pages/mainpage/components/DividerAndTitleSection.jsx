import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const DividerAndTitleSection = (props) => {
    return(
        <div className="divider-and-title-section">
            <div className="lines">
                <div className="text tajawal-15">
                    {props.section}
                </div>
            </div>
        </div>
    )
}
export default DividerAndTitleSection;