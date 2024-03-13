import React from 'react';
import { LayingDoodle } from 'react-open-doodles';

function End() {
  return (
    <div style={styles.container}>
      <h1>Thank You!</h1>
      <p>We hope you enjoyed your visit.</p>
      <LayingDoodle height={200} width={200} primaryColor="#FFB6C1" secondaryColor="#87CEEB" />

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
    height:'30rem'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: '5px',
  },
};

export default End;
