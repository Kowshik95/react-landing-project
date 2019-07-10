import React from 'react';

import './menuItems.component.style.scss';

import { Link } from 'react-router-dom';

const MenuItems = ({ name, link }) => (
  <li className="main-nav-li">
    <Link to={`${link}`} className="main-nav-link">{name}</Link>
  </li>
)

export default MenuItems;