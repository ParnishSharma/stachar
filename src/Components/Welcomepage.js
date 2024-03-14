// WelcomePage.js

import React from "react";
import { ChillingDoodle } from "react-open-doodles";
import { Link } from "react-router-dom";
import "../css/WelcomePage.css"; // Import CSS file

function WelcomePage() {
  return (
    <div className="container">
      {" "}
      {/* Updated className */}
      <h1>Welcome to our e-KYC Service</h1>
      <ChillingDoodle
        height={150}
        width={150}
        primaryColor="#FFB6C1"
        secondaryColor="#87CEEB"
      />
      <p>Click the button below to know more</p>
      <Link to="/home">
        {" "}
        <button className="button">Continue</button> {/* Updated className */}
      </Link>{" "}
    </div>
  );
}

export default WelcomePage;
