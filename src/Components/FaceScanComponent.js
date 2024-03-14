import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/FaceScanComponent.css"; // Import CSS file for styling

const FaceScanComponent = () => {
  const [isAligned, setIsAligned] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [photoData, setPhotoData] = useState(null);
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    let stream = null;
    // Initialize camera stream
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((streamObj) => {
          stream = streamObj;
          if (videoRef.current) {
            videoRef.current.srcObject = streamObj;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }

    // Cleanup function to turn off the camera when component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  // Function to capture photo when alignment is detected
  const capturePhoto = () => {
    if (!photoCaptured && isAligned) {
      const canvas = document.createElement("canvas");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);

      // Save the image data
      setPhotoData(canvas.toDataURL("image/png"));
      setPhotoCaptured(true);
      setDisplayPhoto(true);

      // Stop the video stream
      const stream = video.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }
  };

  // Function to reset photo capture
  const retakePhoto = () => {
    setPhotoData(null);
    setIsAligned(false);
    setCountdown(3);
    setPhotoCaptured(false);
    setDisplayPhoto(false);

    // Reinitialize camera stream
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  const uploadPhoto = () => {
    console.log("Photo uploaded:", photoData);
  };

  useEffect(() => {
    if (isAligned && countdown > 0 && !photoCaptured) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (isAligned && countdown === 0 && !photoCaptured) {
      capturePhoto();
    }
    return () => clearInterval(intervalRef.current);
  }, [isAligned, countdown, photoCaptured]);

  return (
    <div className="face-scan-container">
      <h2>Face Scan</h2>
      <div className="video-container">
        {!displayPhoto ? (
          <video
            ref={videoRef}
            autoPlay
            className="video-preview"
            onPlay={() => {
              // Add face alignment detection logic here
              const detectAlignment = () => {
                // Sample logic for detecting face alignment
                const faceAlignmentThreshold = 0.5; // Adjust this threshold as needed
                const isAligned = Math.random() > faceAlignmentThreshold;
                setIsAligned(isAligned);
              };

              // Sample interval for detecting alignment
              intervalRef.current = setInterval(detectAlignment, 1000); // Adjust interval as needed
            }}
          ></video>
        ) : (
          <img src={photoData} alt="Captured" className="photo-preview" />
        )}
        {isAligned && !photoCaptured && (
          <svg
            className="face-shape"
            width="200"
            height="200"
            style={{ background: "transparent" }}
          >
            <rect
              width="300"
              height="200"
              fill="none" // Set fill to "none" for transparency
              strokeWidth="2" // Adjust stroke width as needed
            />
          </svg>
        )}
      </div>
      {!photoCaptured && (
        <p className="status-message">
          {isAligned
            ? countdown > 0
              ? `Face aligned. Taking photo in ${countdown}...`
              : "Capturing photo..."
            : "Please align your face within the shape."}
        </p>
      )}
      {photoData && (
        <div className="action-buttons">
          {!displayPhoto && (
            <button
              className="capture-button"
              onClick={capturePhoto}
              disabled={!isAligned || photoCaptured}
            >
              Capture Photo
            </button>
          )}
          {displayPhoto && (
            <div>
              <button className="retake-button" onClick={retakePhoto}>
                Retake
              </button>
              <button className="upload-button" onClick={uploadPhoto}>
                Upload
              </button>
            </div>
          )}
        </div>
      )}{" "}
      <Link to="/scancard">
        <button
          style={{
            // marginTop: "1rem",
            // borderRadius: "12px",
            // fontSize: "22px",
            // padding: "8px",
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default FaceScanComponent;
