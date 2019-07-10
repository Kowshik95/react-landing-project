import React from 'react';

import './top-banner.style.scss';

import SocialIcons from '../social-icons/social-icons.component';

const TopBanner = ({ address, email, phone, socialIcons }) => (
  <div className="top-banner">
    <div className="top-banner-container">
      <div className="top-banner-left">
        <span><i className="fas fa-map-marker-alt"></i>{ address }</span>
      </div>
      <div className="top-banner-right">
        <span><a href="emailTo:yourfactory@gmail.com"><i className="fas fa-envelope"></i>{ email }</a></span>
        <span><a href="tel:111(444)355353"><i className="fas fa-phone"></i>{ phone }</a></span>
        {
          socialIcons.map(Icon => (
            <SocialIcons key = { Icon.id } name = { Icon.name } url = { Icon.url } />
          ))
        }
      </div>
    </div>
  </div>
)
export default TopBanner;