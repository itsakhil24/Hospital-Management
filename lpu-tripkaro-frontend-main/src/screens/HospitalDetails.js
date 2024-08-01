import React from 'react';
import Navbar from '../components/common/Navbar';
import HospitalDetails from '../components/HospitalDetails/HospitalDetails';
import './HospitalDetails.css';

function HospitalDetailsPage({ match }) {
  return (
    <div>
      <Navbar />
      <HospitalDetails match={match} />
    </div>
  );
}

export default HospitalDetails;