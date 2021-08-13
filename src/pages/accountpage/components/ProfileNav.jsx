import React, { useState, useEffect } from "react";
import "../../../assets/css/styles.css";
import BaseTitle from "../../../base/BaseTitle";
import ListOfUserInfo from "./ListOfUserInfo";
import { getUserInfoAction } from "../../../API/actions/authenticationactions/AuthActions";
import { headers } from "../../../API/tokens/tokens.jsx";
const ProfileNav = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const getUserInformation = () => {
    getUserInfoAction("", headers).then((response) => {
      let userInformation = response.data.response;
      if (response.status < 300) {
        alert("تم جلب معلومات المستخدم بنجاح");
        setUsername(userInformation.username);
        setEmail(userInformation.email);
        setPhoneNumber(userInformation.phoneNumber);
        setCountry(userInformation.country);
        setAddress(userInformation.address);
      } else {
        alert("حدث خطأ أثناء عملية الجلب");
      }
      console.log(response);
    });
  };
  useEffect(() => {
    getUserInformation();
  }, []);
  return (
    <div>
      <div className="profile-container">
        <div className="row">
          <BaseTitle title="الملف الشخصي" />
        </div>
        <div className="row">
          <ListOfUserInfo
            username={username}
            email={email}
            phoneNumber={phoneNumber}
            country={country}
            address={address}
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileNav;
