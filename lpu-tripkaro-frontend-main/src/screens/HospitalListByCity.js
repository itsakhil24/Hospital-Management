import React from 'react';
import Navbar from '../components/common/Navbar';
import HospitalList from '../components/HospitalList/HospitalList';

function HospitalListByCity() {
  return (
    <div>
      <Navbar />
      <h2>Hospitals by City</h2>
      <HospitalList />
    </div>
  );
}

export default HospitalListByCity;
