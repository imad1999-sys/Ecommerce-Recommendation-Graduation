import React from "react";
import "../../../assets/css/styles.css";
import BaseTitle from "../../../base/BaseTitle";
import BaseInput from "../../../base/BaseInput";
import BaseButton from "../../../base/BaseButton";
import EditIcon from "../../../icons/EditIcon.jsx";
import DeleteIcon from "../../../icons/DeleteIcon.jsx";
const ProfileNav = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="row">
          <BaseTitle title="الملف الشخصي" />
        </div>
        <div className="row">
          <BaseInput type="text" label="اسم المستخدم"/>
        </div>
        <div className="row">
          <BaseInput type="text" label="البريد الالكتروني"/>
        </div>
        <div className="row">
          <BaseButton
            icon={<EditIcon />}
            text="تعديل معلومات الحساب"
            link="/update-account"
          />
          <BaseButton
            icon={<DeleteIcon />}
            text="حذف الحساب"
            link="/login"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileNav;
