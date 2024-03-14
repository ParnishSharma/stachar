import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='navbar-head'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home" style={{ color: "#D1F8F3", fontSize: "2.5rem", fontFamily: "Futura", animation: "continuous-animation 4s infinite alternate" }}>STACHAR</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"  style={{ marginRight: "15px" }}>
<<<<<<< HEAD
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}> 
                <Link className="nav-link" to="/fields" style={{ color: "white" }}>Fields</Link>
=======
                <Link className="nav-link active" aria-current="page" to="/home" style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}> 
                <Link className="nav-link" to="/scan" style={{ color: "white" }}>Scan</Link>
>>>>>>> 5542d4bb3dec233764788825746cc26fa07c9b23
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}> 
              <Link className="nav-link" to="/collab" style={{ color: "white" }}>Profile</Link>
            </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/" style={{ color: "white" }}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
