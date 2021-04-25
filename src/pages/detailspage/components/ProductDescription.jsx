import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const productDescription = () => {
    return (
      <p class="lh-lg">
        <dl className="row">
          <div className="des-title baloo-chettan-25">Description</div>
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">
            A description list is perfect for defining terms.
          </dd>
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">
            A description list is perfect for defining terms.
          </dd>
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">
            A description list is perfect for defining terms.
          </dd>
        </dl>
      </p>
    );
}
export default productDescription;