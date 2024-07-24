import React, { useState, useEffect } from 'react';
import './EditHospital.css';

function EditHospital({ match }) {
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`/api/hospitals/${match.params.id}`);
      const data = await response.json();
      setHospital(data);
    };
    fetchHospital();
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  if (!hospital) return <div>Loading...</div>;

  return (
    <form className="edit-hospital-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={hospital.name} disabled />
      </label>
      <label>
        City:
        <input type="text" value={hospital.city} disabled />
      </label>
      <label>
        Rating:
        <input type="number" value={hospital.rating} onChange={(e) => setHospital({ ...hospital, rating: Number(e.target.value) })} />
      </label>
      <label>
        Image URL:
        <input type="text" value={hospital.imageURL} onChange={(e) => setHospital({ ...hospital, imageURL: e.target.value })} />
      </label>
      <label>
        Description:
        <textarea value={hospital.description} onChange={(e) => setHospital({ ...hospital, description: e.target.value })} />
      </label>
      <label>
        Number of Doctors:
        <input type="number" value={hospital.numberOfDoctors} onChange={(e) => setHospital({ ...hospital, numberOfDoctors: Number(e.target.value) })} />
      </label>
      <label>
        Number of Departments:
        <input type="number" value={hospital.numberOfDepartments} onChange={(e) => setHospital({ ...hospital, numberOfDepartments: Number(e.target.value) })} />
      </label>
      <button type="submit">Update Hospital</button>
    </form>
  );
}

export default EditHospital;
