import React from 'react';

/* My Components */
import Nametag from './components/Nametag/Nametag.jsx';

/* Space Animation */
require('./THREE/space.js');

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Nametag />
      </div>
    );
  }
}

export default LandingPage;