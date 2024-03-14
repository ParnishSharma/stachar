import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Scancard.css"; // Import CSS file
import axios from "axios";

function Scancard() {
  const [aadharImageUrl, setAadharImageUrl] = useState(null);
  const [panImageUrl, setPanImageUrl] = useState(null);
  const videoRef = useRef();
  const [mediaStream, setMediaStream] = useState(null);

  const handleAadharCapture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL("image/png");
    setAadharImageUrl(imageUrl);
  };

  const handlePanCapture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL("image/png");
    setPanImageUrl(imageUrl);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', dataURItoBlob(aadharImageUrl)); // or panImageUrl
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Redirect or show success message
    } catch (error) {
      console.error('Error uploading image:', error);
      // Show error message
    }
  };

  const handleRetake = () => {
    setAadharImageUrl(null);
    setPanImageUrl(null);
  };

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setMediaStream(stream);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const handleStopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  // Function to convert data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="center-container">
      <div className="scancard-container">
        <h1>Upload Aadhar and Pan Card</h1>
        <div className="camera-container">
          <video ref={videoRef} autoPlay />
          {aadharImageUrl && (
            <img src={aadharImageUrl} alt="Aadhar Card" width="200" />
          )}
          {panImageUrl && <img src={panImageUrl} alt="Pan Card" width="200" />}
        </div>
        <div className="buttons-container">
          {!aadharImageUrl && (
            <button onClick={handleAadharCapture}>Capture Aadhar</button>
          )}
          {!panImageUrl && (
            <button onClick={handlePanCapture}>Capture Pan</button>
          )}
          {(aadharImageUrl || panImageUrl) && (
            <button onClick={handleRetake}>Retake</button>
          )}
          {mediaStream ? (
            <button onClick={handleStopCamera}>Stop Camera</button>
          ) : (
            <button onClick={handleStartCamera}>Start Camera</button>
          )}
          <Link to="/end">
            <button
              className="continue-button"
              disabled={!aadharImageUrl || !panImageUrl}
              onClick={handleSubmit} // Call handleSubmit when clicking the button
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scancard;
