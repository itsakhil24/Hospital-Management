import React, { useState, useEffect } from 'react';
import './HospitalList.css';

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    // Fetch hospitals by city
  }, [city]);

  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="City1">City1</option>
        <option value="City2">City2</option>
      </select>
      <div className="hospital-list">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <img src={hospital.imageURL} alt={hospital.name} />
            <h3>{hospital.name}</h3>
            <p>{hospital.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalList;
