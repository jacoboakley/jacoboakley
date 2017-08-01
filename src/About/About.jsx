import React from 'react';
import AboutMe from './elements/AboutMe.jsx';
import Knowledge from './elements/Knowledge.jsx';
import Skills from './elements/Skills.jsx';

const AboutStyle = {
  position: 'absolute',
  top: 0,

  height: '100vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  background: 'white',

  zIndex: '-1',
}

class About extends React.Component {
  render() {
    return (
      <div style={AboutStyle}>
        <AboutMe />
        <Knowledge />
        <Skills />
      </div>
    )
  }
}

export default About;