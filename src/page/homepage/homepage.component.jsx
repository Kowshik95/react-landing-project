import React from 'react';
import TopBanner from '../../component/top-banner/top-banner.component';
import Header from '../../component/header/header.component';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      'address': 'Pennsylvania Ave , Lebson 1650, Phurtogal.',
      'email': 'yourfactory@gmail.com',
      'phone': '111(444)355353',
      'socialIcons': [
        {
          'name' : 'facebook',
          'url' : 'https://facebook.com/',
          'id' : 1
        },
        {
          'name' : 'twitter',
          'url' : 'https://twitter.com/',
          'id' : 2
        },
        {
          'name' : 'gmail',
          'url' : 'https://gmail.com/',
          'id' : 3
        },
        {
          'name' : 'linkedin',
          'url' : 'https://linkedin.com/',
          'id' : 4
        },
        {
          'name' : 'youtube',
          'url' : 'https://youtube.com/',
          'id' : 5
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <TopBanner address= { this.state.address } email={this.state.email} phone={this.state.phone} socialIcons = { this.state.socialIcons }/>
        <Header/>
        <div className="Homepage">
        </div>
      </div>
    )
  }
}
export default HomePage;