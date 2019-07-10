import React from 'react';

import { Link } from 'react-router-dom';

import './logo.component.style.scss';

const Logo = () => (
  <div className="logo-container">
    <Link to="/" className="logo-link">
      <h1 className="logo">Factorysite</h1>
    </Link>
  </div>
)

export default Logo;