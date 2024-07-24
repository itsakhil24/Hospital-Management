import React from 'react';
import Navbar from '../components/common/Navbar';
import EditHospital from '../components/EditHospital/EditHospital';

function EditHospitalScreen({ match }) {
  return (
    <div>
      <Navbar />
      <h2>Edit Hospital Details</h2>
      <EditHospital match={match} />
    </div>
  );
}

export default EditHospitalScreen;
