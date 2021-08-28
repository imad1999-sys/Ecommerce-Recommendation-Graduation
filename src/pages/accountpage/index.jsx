import React, { useState, useEffect } from "react";
import BasePreloader from "../../base/BasePreloader.jsx";
import BaseSpinner from "../../base/BaseSpinner.jsx";
import AccountPage from "./components/AccountPage.jsx";
const AccountPageCompleted = () => {
  return (
    <div>
      <BasePreloader page={<AccountPage />} />
    </div>
  );
};
export default AccountPageCompleted;
