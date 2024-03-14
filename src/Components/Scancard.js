import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Scancard() {
  return (
    <div>
      <Link to="/end">
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
}

export default Scancard;
