import React from 'react';

/* Components */
import Nametag from './components/Nametag/Nametag.jsx';

/* Space Animation */
require('./animations/space.js');

import './animations/slideEffect.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div id='landingPage'>
        <Nametag />
      </div>
    );
  }
}