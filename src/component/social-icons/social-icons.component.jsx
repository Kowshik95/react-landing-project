import React from 'react';

import './social-icons.component.style.scss';

const SocialIcons = ( { name, url } ) => (
  <a href={`${url}`} className={`social-icon ${name} `}></a>
)

export default SocialIcons;