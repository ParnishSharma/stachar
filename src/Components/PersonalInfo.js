
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
























