import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Scancard.css"; // Import CSS file

function Scancard() {
  const [aadharImage, setAadharImage] = useState(null);
  const [panImage, setPanImage] = useState(null);
  const [aadharImageUrl, setAadharImageUrl] = useState(null);
  const [panImageUrl, setPanImageUrl] = useState(null);

  const handleAadharChange = (e) => {
    const file = e.target.files[0];
    setAadharImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setAadharImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePanChange = (e) => {
    const file = e.target.files[0];
    setPanImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPanImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    // For example, you can send the files to a server using fetch or Axios
    console.log("Aadhar Image:", aadharImage);
    console.log("Pan Image:", panImage);
  };

  return (
    <div className="center-container">
      {/* Container to center the component */}
      <div className="scancard-container">
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
          {aadharImageUrl && (
            <img src={aadharImageUrl} alt="Aadhar Card" width="200" />
          )}
        </div>
        <div>
          <label htmlFor="pan">Upload Pan Card (JPG/PNG):</label>
          <input
            type="file"
            id="pan"
            accept="image/jpeg, image/png"
            onChange={handlePanChange}
          />
          {panImageUrl && <img src={panImageUrl} alt="Pan Card" width="200" />}
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
