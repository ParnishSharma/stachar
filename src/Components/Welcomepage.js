import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ChillingDoodle } from 'react-open-doodles';
import { Link } from 'react-router-dom';
function WelcomePage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Website</h1>
      <ChillingDoodle height={150} width={150} primaryColor="#FFB6C1" secondaryColor="#87CEEB" />
      <p>Explore our website to discover more!</p>
<Link to="/home">      <button style={styles.button}>
        Continue <FaArrowRight style={styles.arrowIcon} />
      </button></Link>  
        </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height:'35rem'
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  arrowIcon: {
    marginLeft: '5px',
  },
};

export default WelcomePage;
