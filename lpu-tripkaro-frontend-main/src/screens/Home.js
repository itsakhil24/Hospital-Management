import React from 'react';
import Navbar from '../components/common/Navbar';
import HospitalDetails from '../components/HospitalDetails/HospitalDetails';
import './Home.css';

function Home() {
  
  return (
    <div>
      <Navbar />
      <h1>Welcome to Hospital Management System</h1>
      
        <HospitalDetails></HospitalDetails>
      
    </div>
  );
}

export default Home;
