import React from 'react';
import './CityCard.css';

function CityCard({ city, image, onClick }) {
  return (
    <div className="city-card" onClick={onClick}>
      <img src={image} alt={city} />
      <h3>{city}</h3>
    </div>
  );
}

export default CityCard;
