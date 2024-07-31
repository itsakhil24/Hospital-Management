import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditHospital.css';

function EditHospital() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    name: '',
    city: '',
    imageURL: '',
    specialities: [],
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'specialities') {
      const selectedOptions = [...e.target.selectedOptions].map(option => option.value);
      setData({ ...data, [name]: selectedOptions });
    } else if (name === 'rating') {
      setData({ ...data, [name]: Number(value) });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the server
    let result = await fetch(`http://localhost:5000/hos/editPost/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let response = await result.json();
    console.log(response.msg);
    alert(response.msg)



    // Clear the form fields
    setData({
      name: '',
      city: '',
      imageURL: '',
      specialities: [],
      rating: 0,
    });

    alert(response.msg);
    navigate('/');
  };

  


  return (
    <form className="hospital-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={data.city} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="imageURL" value={data.imageURL} onChange={handleChange} />
      </label>
      <label>
        Specialities:
        <select multiple name="specialities" value={data.specialities} onChange={handleChange}>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
      </label>
      <label>
        Rating:
        <input type="number" name="rating" value={data.rating} onChange={handleChange} />
      </label>
      <button type="submit">Add Hospital</button>
    </form>
  );
}

export default EditHospital;