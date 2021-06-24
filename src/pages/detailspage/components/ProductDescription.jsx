import React from "react";
import "../../../assets/css/styles.css";
import "../../../assets/css/fonts.css";

const productDescription = () => {
  return (
    <div className="description-section">
      <p class="lh-lg">
        <dl className="row">
          <div className="des-title baloo-chettan-25">توصيف المنتج</div>
          <dt class="col-sm-3 baloo-15">: التوصيف الأول</dt>
          <dd class="col-sm-9 baloo-15">تايلسنايمسؤلاستيالاؤ</dd>
          <dt class="col-sm-3 baloo-15"> : التوصيف الثاني</dt>
          <dd class="col-sm-9 baloo-15">وتالينشسرناسشريراسش</dd>
          <dt class="col-sm-3 baloo-15">: التوصيف الثالث</dt>
          <dd class="col-sm-9 baloo-15">نتاشنيلشسرنيسشاريناشس</dd>
        </dl>
      </p>
    </div>
  );
};
export default productDescription;
