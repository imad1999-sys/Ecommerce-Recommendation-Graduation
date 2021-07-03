import React from "react";
import "../../../assets/css/styles.css";
import BaseInput from "../../../base/BaseInput";
import BaseTitle from "../../../base/BaseTitle";


const UpdateAccountInfo = () => {
    return (
        <div>
            <BaseTitle title="تعديل معلومات الحساب" />
            <BaseInput type="text" label="الاسم" />
            <BaseInput type="email" label="البريد الالكتروني" />
        </div>
    )
}
export default UpdateAccountInfo;