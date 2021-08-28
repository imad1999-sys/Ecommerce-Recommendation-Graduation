import React, { useState, useEffect } from "react";
import "../../../assets/css/styles.css";
import BaseTitle from "../../../base/BaseTitle";
import ListOfUserInfo from "./ListOfUserInfo";
import { headers } from "../../../API/tokens/tokens.jsx";
import { getUserInfoService } from "../../../API/services/other/AuthenticationServices";
const ProfileNav = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const getUserInformation = () => {
    getUserInfoService("", headers).then((response) => {
      let userInformation = response.data.response;
      if (response.status < 300) {
        setUsername(userInformation.username);
        setEmail(userInformation.email);
        setPhoneNumber(userInformation.phoneNumber);
        setCountry(userInformation.country);
        setAddress(userInformation.address);
      }
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
