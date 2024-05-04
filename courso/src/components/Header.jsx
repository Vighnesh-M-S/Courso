import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Course Management System</h1>
      {/* Add the student profile button */}
      <Link to="/Dashboard" className="profile-button">Student Profile</Link>
    </header>
  );
};

export default Header;