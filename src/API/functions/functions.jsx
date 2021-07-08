import React, { useState } from "react";
import { token } from "../tokens/tokens.jsx";
import { getUserInfoUrl } from "../urls/ApiUrls.jsx";

export const FetchUserInfo = async () => {
  const [data, setData] = useState({});
  let result = await fetch(getUserInfoUrl, {
    headers: {
      Authorization: token,
    },
  });
  result = await result.json();
  setData(result.response);
  console.log(result.response);
};
