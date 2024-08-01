import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HospitalForm.css';

function HospitalForm() {
  const [data, setData] = useState({
    name: '',
    city: '',
    imageURL: '',
    specialities: [],
    rating: 0,
  });
  const navigate = useNavigate(); // Define the navigate function

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
    try {
      const response = await fetch('http://localhost:3000/hos/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const text = await response.text(); // Get the response text for debugging
        throw new Error(`Server error: ${text}`);
      }
  
      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        throw new Error('Failed to parse JSON response: ' + jsonError.message);
      }
  
      console.log(responseData);
  
      // Clear the form fields
      setData({
        name: '',
        city: '',
        imageURL: '',
        specialities: [],
        rating: 0,
      });
  
      alert(responseData.msg);
      navigate('/');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert(`Error: ${error.message}`);
    }
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

export default HospitalForm;
