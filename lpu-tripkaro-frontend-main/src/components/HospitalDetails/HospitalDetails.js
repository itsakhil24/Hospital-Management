import React, { useState, useEffect } from 'react';
import './HospitalDetails.css';
import { useNavigate } from 'react-router-dom';

function HospitalDetails({ match }) {
  const [hospital, setHospital] = useState(null);
  const navigate = useNavigate(); // Call useNavigate() to get the navigate function

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`${URL}/hospitalDetails`);
      const result = await response.json();
      console.log(result)
      setHospital(result.data);
    };
    fetchHospital();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edithsptl/${id}`); // Use the navigate function to navigate to the edit page
  }

  const handleDelete = async (id) => {
    console.log(id)
    const response = await fetch(`http://localhost:5000/hos/delete/${id}`, {
      method: 'DELETE'
    })

    const result = await response.json();
    alert(result.msg)
    if (response.ok) {
      // Update the state to remove the deleted hospital
      setHospital((prevHospitals) => prevHospitals.filter(hospital => hospital._id !== id));
    }
  }

  if (!hospital) return <div>Loading...</div>;

  return (
    <div className="hospital-details">
      {
        hospital.map((hospital, index) => {
          return (
            <div key={index}>
              <h1>{hospital.name}</h1>
              <h3>Location : {hospital.city}</h3>
              <p>Rating : {hospital.rating}</p>
              <p>Specialities : {hospital.specialities}</p>
              <button onClick={(e) => { handleEdit(hospital._id) }}>Edit</button>
              <button onClick={(e) => { handleDelete(hospital._id) }}>Delete</button>
              <hr></hr>
            </div>
          )
        })
      }
    </div>
  );
}

export default HospitalDetails;