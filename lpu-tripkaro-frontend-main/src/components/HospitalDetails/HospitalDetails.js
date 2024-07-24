import React, { useState, useEffect } from 'react';
import './HospitalDetails.css';

function HospitalDetails({ match }) {
  const URL = "https://hospital-management-n7cp.onrender.com"
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`${URL}/hos/hospitalDetails`);
      const result = await response.json();
      console.log(result)
      setHospital(result.data);


    };
    fetchHospital();
    // console.log(hospital)
   
  }, []);

  if (!hospital) return <div>Loading...</div>;

  return (

    <div className="hospital-details">

      {
        hospital.map((hospital,index) =>{
         return(
          <div key={index}>
            <h1>{hospital.name}</h1>
            <h3>Location : {hospital.city}</h3>
            <p>Rating : {hospital.rating}</p>
            <p>Specialities : {hospital.specialities}</p>
            <button>Edit</button>
            <hr></hr>
          </div>
         ) 
        } )
          


      }
      {/* <p>{hospital}</p> */}
      {/* <img src={hospital.imageURL} alt={hospital.name} /> */}
      {/* <h1>{hospital.name}</h1>
      <p>{hospital.city}</p>
      <p>{hospital.specialities.join(', ')}</p>
      <p>{hospital.rating}</p>
      <p>{hospital.description}</p>
      <p>{hospital.images.map(img => <img src={img} alt="hospital" key={img} />)}</p>
      <p>Number of doctors: {hospital.numberOfDoctors}</p>
      <p>Number of departments: {hospital.numberOfDepartments}</p> */}
    </div>
  );
}

export default HospitalDetails;
