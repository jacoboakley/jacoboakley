import React from 'react';
import Nametag from './Nametag/Nametag.jsx';
import Intro from './Intro/Intro.jsx';

class About extends React.Component {
  render() {
    return (
      <div>
        <Nametag />
        <Intro />
      </div>
    )
  }
}

export default About;