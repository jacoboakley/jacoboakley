import React from 'react';
import AboutMe from './Intro/AboutMe.jsx';
import Knowledge from './Intro/Knowledge.jsx';

const AboutStyle = {
  position: 'absolute',
  marginTop: '65vh',

  background: 'white',
}

class About extends React.Component {
  render() {
    return (
      <div style={AboutStyle}>
        <AboutMe />
        <Knowledge />
      </div>
    )
  }
}

export default About;