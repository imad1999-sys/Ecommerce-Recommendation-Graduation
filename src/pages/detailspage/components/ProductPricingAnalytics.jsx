import React from "react";
import PriceChart from "./PriceChart.jsx";
const ProductPricingAnalytics = () => {
    return(
        <div className="chart-section">
            <div className="row">
                <p className="baloo-chettan-25">Chart</p>
            </div>
            <div className="row">
                <PriceChart />
            </div>
        </div>
    )
}
export default ProductPricingAnalytics;