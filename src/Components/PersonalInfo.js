import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/PersonalInfo.css";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    income: "",
    employmentStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const areAllFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");
    if (areAllFieldsFilled) {
      console.log("All fields are filled:", formData);
      // Navigate to the next page
      // Add your navigation logic here
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="income">Income per annum:</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="employmentStatus">Employment Status:</label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-employed">Self-employed</option>
            </select>
          </div>
          <Link to="/scan" style={{ textAlign: "center", margin: "12px" }}>
            <button type="submit">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
