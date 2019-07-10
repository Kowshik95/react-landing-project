import React from 'react';

import './menuItems.component.style.scss';

const MenuItems = ({ name, link }) => (
  <li className="main-nav-li">
    <a href={`${link}`} className="main-nav-link">{name}</a>
  </li>
)

export default MenuItems;