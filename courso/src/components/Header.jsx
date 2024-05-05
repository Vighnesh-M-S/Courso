import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-button">Home</Link>
      <h1>Course Management System</h1>
      </div>
      <Link to="/Dashboard" className="profile-button">Student Profile</Link>
    </header>
  );
};

export default Header;