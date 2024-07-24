import React from 'react';
import Navbar from '../components/common/Navbar';
import HospitalForm from '../components/HospitalForm/HospitalForm';

function HospitalCreation() {
  return (
    <div>
      <Navbar />
      <h2>Add a New Hospital</h2>
      <HospitalForm />
    </div>
  );
}

export default HospitalCreation;
