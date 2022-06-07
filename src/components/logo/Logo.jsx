import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Profilance Group Logo" />
    </Link>
  );
}

export default Logo;
