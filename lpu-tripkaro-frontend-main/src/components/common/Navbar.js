
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-hospital">Add Hospital</Link>
      <Link to="/hospitals">Hospitals</Link>
    </nav>
  );
}

export default Navbar;
