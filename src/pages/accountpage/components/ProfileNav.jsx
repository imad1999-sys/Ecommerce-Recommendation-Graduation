import React, { useState, useEffect } from "react";
import "../../../assets/css/styles.css";
import BaseTitle from "../../../base/BaseTitle";
import ListOfUserInfo from "./ListOfUserInfo";
import { useHistory } from "react-router";
import { getUserInfoUrl } from "../../../API/urls/ApiUrls";
import { FetchUserInfo } from "../../../API/functions/functions";
const ProfileNav = () => {
  let token = localStorage.getItem("user-info");
  let tokenJson = JSON.parse(token);
  console.log(tokenJson.response.token);

  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
  useEffect(async () => {
    let token = "Bearer " + tokenJson.response.token;
    let result = await fetch(getUserInfoUrl, {
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    console.log(result.response);
    setUsername(result.response.username);
    setEmail(result.response.email);
    setPhoneNumber(result.response.phoneNumber);
    setCountry(result.response.country);
    setAddress(result.response.address);
    //  setImage("http://127.0.0.1:8000/uploads/"+result[0].media[0].id+"/"+result[0].media[0].file_name);
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
