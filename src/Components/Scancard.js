import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Scancard.css"; // Import CSS file

function Scancard() {
  const [aadharImage, setAadharImage] = useState(null);
  const [panImage, setPanImage] = useState(null);

  const handleAadharChange = (e) => {
    setAadharImage(e.target.files[0]);
  };

  const handlePanChange = (e) => {
    setPanImage(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    // For example, you can send the files to a server using fetch or Axios
    console.log("Aadhar Image:", aadharImage);
    console.log("Pan Image:", panImage);
  };

  return (
    <div className="center-container">
      {" "}
      {/* Container to center the component */}
      <div className="scancard-container">
        {" "}
        {/* Container for the component */}
        <p>Please upload both your Aadhar and Pan card:</p>
        <div>
          <label htmlFor="aadhar">Upload Aadhar Card (JPG/PNG):</label>
          <input
            type="file"
            id="aadhar"
            accept="image/jpeg, image/png"
            onChange={handleAadharChange}
          />
        </div>
        <div>
          <label htmlFor="pan">Upload Pan Card (JPG/PNG):</label>
          <input
            type="file"
            id="pan"
            accept="image/jpeg, image/png"
            onChange={handlePanChange}
          />
        </div>
        <Link to="/end">
          <button
            className="continue-button"
            onClick={handleUpload}
            disabled={!aadharImage || !panImage}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Scancard;
