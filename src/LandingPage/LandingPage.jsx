import React from 'react';

/* Components */
import Nametag from './components/Nametag/Nametag.jsx';

/* Space Animation */
require('./THREE/space.js');

import './landingPage.css';

export default class LandingPage extends React.Component {

  

  render() {
    return (
      <div id='landingPage'>
        <Nametag />
      </div>
    );
  }
}