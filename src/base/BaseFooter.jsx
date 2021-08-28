import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import "../assets/css/fonts.css";
import { LocationIcon, EmailIcon } from "../icons/icons.jsx";
const BaseFooter = () => {
  return (
    <div className="bg-light text-dark pt-5 pb-4 ">
      <div className="footer-container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold tajawal-25">
              عن الموقع
            </h5>
            <hr className="mb-4" />
            <p className="about-us-text tajawal-15">
              يقارن البيت الالكتروني الأسعار فقط. جميع أسماء المنتجات ، العلامات
              التجارية وعلامات الخدمة والشعارات والرسوم والنماذج الصناعية في هذا
              الموقع ملكية حصرية لأصحابها ويتم عرضها فقط لغرض هذا الموقع. الصفحة
              الرئيسية الإلكترونية تعمل كحزب مستقل ولا تعتبر أ ممثل أو وكيل أو
              موظف أو راعي أو شريك أو أي شخص آخر مثل هذا الشيء لمالكي هذه
              المنتجات أو العلامات التجارية
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold tajawal-25">
              الأصناف
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link tajawal-15">
                الشاشات المتلفزة
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link tajawal-15">
                الاجهزة اللوحية
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link tajawal-15">
                ساعات ذكية
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link tajawal-15">
                لابتوبات
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold tajawal-25">
              المتاجر & التصنيفات
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link tajawal-15">
                المتاجر في البيت الالكتروني
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link tajawal-15">
                تصنيفات المنتجات
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold tajawal-25">
              التواصل
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link tajawal-15">
                <LocationIcon /> دمشق - سوريا
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link tajawal-15">
                <EmailIcon /> electronic.home.2021@gmail.com
              </a>
            </p>
          </div>

          <hr className="mb-4" />

          <div className="row d-flex justify-content-center">
            <div>
              <p className="copyright tajawal-15">
                جميع حقوق النشر محفوظة :
                <Link to="/home" className="copyright-link tajawal-15">
                  البيت الالكتروني
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
