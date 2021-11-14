import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const productDescription = (props) => {
  return (
    <div className="description-section">
      <p class="lh-lg">
        <dl className="row">
          <div className="des-title tajawal-25">توصيف المنتج</div>
          <dt class="col-2 tajawal-15">التوصيف: </dt>
          <dd class="col-10 tajawal-15">{props.description}</dd>
        </dl>
      </p>
    </div>
  );
};
export default productDescription;
