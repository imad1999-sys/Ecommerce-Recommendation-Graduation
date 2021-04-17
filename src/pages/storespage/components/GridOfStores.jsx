import React from "react";
import AvatarImage from "./AvatarImage.jsx";
import Amazon from "../../../assets/images/amazon.png";
import Ebay from "../../../assets/images/ebay.png";
import Huawei from "../../../assets/images/huawei.png";
import IKEA from "../../../assets/images/ikea.png";
import Lacoste from "../../../assets/images/lacoste.png";
import MAC from "../../../assets/images/mac.png";
import Virgin from "../../../assets/images/virgin.png";
import Xcite from "../../../assets/images/xcite.png";
import "../../../assets/css/styles.css";
import OptionsSection from "./OptionsSection.jsx";
const gridOfStores = () => {
  return (
    <div className="grid-of-stores-container">
      <div class="row gy-4">
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Amazon" image={Amazon} />
          <OptionsSection title="Amazon" value="4.5" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Ebay" image={Ebay} />
          <OptionsSection title="Ebay" value="4.7" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Huawei" image={Huawei} />
          <OptionsSection title="Huawei" value="5" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="IKEA" image={IKEA} />
          <OptionsSection title="IKEA" value="4.1" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Lacoste" image={Lacoste} />
          <OptionsSection title="Lacoste" value="4.5" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="MAC" image={MAC} />
          <OptionsSection title="MAC" value="3.7" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Virgin" image={Virgin} />
          <OptionsSection title="Virgin Megastore" value="4.8" />
        </div>
        <div class="col-6 col-md-4 p-3">
          <AvatarImage alt="Xcite" image={Xcite} />
          <OptionsSection title="Xcite" value="4.3" />
        </div>
      </div>
    </div>
  );
};

export default gridOfStores;
