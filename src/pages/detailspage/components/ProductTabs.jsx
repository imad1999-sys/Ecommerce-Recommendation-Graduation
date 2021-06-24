import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";
import ProductType from "./ProductType.jsx";
import ProductOnlineStores from "./ProductOnlineStores.jsx";
const ProductTabs = () => {
    return (
      <div className="tabs-section">
          <p className="baloo-chettan-25">الاسعار في سوريا</p>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active baloo-15"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              متاجر اونلاين
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link baloo-15"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              جديد أم مستعمل
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
              <ProductOnlineStores />
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <ProductType />
          </div>
        </div>
      </div>
    );
}
export default ProductTabs;