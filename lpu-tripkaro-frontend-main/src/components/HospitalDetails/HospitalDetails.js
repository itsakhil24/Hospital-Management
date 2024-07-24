import React, { useState, useEffect ,} from 'react';
import './HospitalDetails.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function HospitalDetails({ match }) {
  const navigate = useNavigate();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await fetch(`http://localhost:5000/hos/hospitalDetails`);
      const result = await response.json();
      console.log(result)
      setHospital(result.data);


    };
    fetchHospital();
    // console.log(hospital)
   
  }, []);

  const handleEdit=(id)=>{
    navigate(`/edithsptl/${id}`);
  }

  const handleDelete = async(id)=>{
console.log(id)
      const response = await fetch(`http://localhost:5000/hos/delete/${id}`,{
        method:'DELETE'
      })

      const result = await response.json();
      alert(result.msg)
      if (response.ok) {
        // Update the state to remove the deleted hospital
        setHospital((prevHospitals) => prevHospitals.filter(hospital => hospital._id !== id));
      }
      // console.log(result.msg)
      // console.log(result.data)   
  }

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
            <button onClick={(e)=>{handleEdit(hospital._id)}}>Edit</button>
            <button onClick={(e)=>{handleDelete(hospital._id)}}>Delete</button>
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
