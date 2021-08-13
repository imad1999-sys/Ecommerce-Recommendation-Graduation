import React from "react";
import "../assets/css/fonts.css";
import "../assets/css/styles.css";
import CategoryIcon from "../icons/CategoryIcon.jsx";
import LaptopIcon from "../icons/LaptopIcon.jsx";
import MobileIcon from "../icons/MobileIcon.jsx";
import CameraIcon from "../icons/CameraIcon.jsx";
import { Link, useParams } from "react-router-dom";
const BaseSidebar = (props) => {
  const { mobiles } = useParams();
  const { accessoire } = useParams();
  console.log(mobiles + accessoire);
  return (
    <div>
      <a
        class="nav-link"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        أصناف المتجر <CategoryIcon />
      </a>

      <div
        class="offcanvas offcanvas-start tajawal-15"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <CategoryIcon /> الاصناف
          </h5>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group category-group">
            <li class="list-group-item options-section">
              <Link to={"/category/" + props.mobiles} className="title">
                <MobileIcon />
                {props.mobiles}
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to={"/category/" + props.accessoire} className="title">
                <LaptopIcon />
                {props.accessoire}
              </Link>
            </li>
            <li class="list-group-item options-section">
              <Link to="/category/" className="title">
                <CameraIcon />
                كاميرات
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BaseSidebar;
