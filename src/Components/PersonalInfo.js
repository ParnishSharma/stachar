<<<<<<< HEAD

import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React, { useState }  from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [income, setIncome] = useState("");
  const [employment, setEmployment] = useState("");
  const navigate = useNavigate();
  const refer = () => {
   navigate('/scan');
  };
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/mvc/auth/register", {
        name,
        email,
        phone,
        address,
        income,
        employment
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/scan");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Income"
              required
            />
          </div>


          <div className="mb-3">
            <input
              type="text"
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your employment"
              required
            />
          </div>




          <button type="submit"  className="btn btn-primary">
        Continue  
          </button>
        </form>
      </div>
  );
};

export default PersonalInfo
























=======
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
      <h2 style={{fontFamily:'sans-serif', textAlign:'center', textDecoration:'underline', marginBottom:'12px'}}>Kindly Fill Your Details</h2>
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
>>>>>>> 5fd33205559d96c04ac69eb54a2905abc2f77911
