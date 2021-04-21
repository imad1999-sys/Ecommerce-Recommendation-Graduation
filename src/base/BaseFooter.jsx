import React from "react";
import EmailIcon from "../icons/EmailIcon.jsx";
import LocationIcon from "../icons/LocationIcon.jsx";
import {Link} from "react-router-dom";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
const BaseFooter = () => {
  return (
    <div className="bg-light text-dark pt-5 pb-4 ">
      <div className="footer-container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold baloo-chettan-30">
              About Us
            </h5>
            <hr className="mb-4" />
            <p className="about-us-text baloo-15">
              Electronic Home only compares prices. All product names, trademarks,
              service marks, logos, industrial designs and designs on this site
              are the exclusive property of their respective owners and are
              shown only for the purpose of this site. Electronic Home operates as an
              independent party and is not considered a representative, agent,
              employee, sponsor, partner, or any other such thing for the owners
              of these Products or brands
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold baloo-chettan-30">
              Categories
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link baloo-15">
                TVs
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link baloo-15">
                Tablets
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link baloo-15">
                Smart Watches
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link baloo-15">
                Laptops
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold baloo-chettan-30">
              Stores & Ratings
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link baloo-15">
                Stores On Electornic Home
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link baloo-15">
                Product Ratings
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold baloo-chettan-30">
              Contact
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link baloo-15">
                <LocationIcon /> Damascus - Syria
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link baloo-15">
                <EmailIcon /> electronic.home.2021@gmail.com
              </a>
            </p>
          </div>

          <hr className="mb-4" />

          <div className="row d-flex justify-content-center">
            <div>
              <p className="copyright baloo-15">
                Copyright 2021 All Rights Reserved By:
                <Link to="/home" className="copyright-link baloo-15">
                  Electronic Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BaseFooter;
