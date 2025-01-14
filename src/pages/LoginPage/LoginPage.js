import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleContinue = () => {
    if (mobileNumber.length === 10) {
      alert("Continue with mobile number: " + mobileNumber);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="login-container">
        <div className="styling"></div>
      <div className="login-box">
        <h2>Login / Signup</h2>
        <input
          type="text"
          className="mobile-input"
          placeholder="+91 | Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
