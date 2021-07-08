import React from "react";
import BaseCard from "../../../base/BaseCard.jsx";
import laptop from "../../../assets/images/laptop.jpg";
import "../../../assets/css/styles.css";


const MostRatedProducts = () => {
    return (
      <div className="rated-container">
          <div className="row">
              <p className="baloo-chettan-25">العناصر المشابهة : </p>
          </div>
        <div className="row">
          <div className="col-sm">
            <BaseCard
              image={laptop}
              name="laptop"
              price="1500000"
              link="/details"
            />
          </div>
          <div className="col-sm">
            <BaseCard
              image={laptop}
              name="laptop"
              price="1500000"
              link="/details"
            />
          </div>
        </div>
      </div>
    );
}
export default MostRatedProducts;