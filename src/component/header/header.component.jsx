import React from 'react';

import './header.component.style.scss';

import Logo from '../logo/logo.component';

import MenuItems from '../menuItems/menuItems.component';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      'menuItems' : [
        {
          'name' : 'Home',
          'link' : '/home',
          'id' : 1
        },
        {
          'name' : 'About us',
          'link' : '/about-us',
          'id' : 2
        },
        {
          'name' : 'Service',
          'link' : '/service',
          'id' : 3
        },
        {
          'name' : 'Project',
          'link' : '/project',
          'id' : 4
        },
        {
          'name' : 'News',
          'link' : '/news',
          'id' : 5
        },
        {
          'name' : 'Shop',
          'link' : '/shop',
          'id' : 6
        },
        {
          'name' : 'Contact',
          'link' : '/contact',
          'id' : 7
        }
      ]
    }
  }

  render() {
    return (
      <header className="header">
        <nav className="header-navigation">
          <Logo/>
          <ul className="main-nav">
          {
            this.state.menuItems.map(({ id, ...othermenupropos}) => (
              <MenuItems key={ id } { ...othermenupropos }/>
            ))
          }
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;