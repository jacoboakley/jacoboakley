import React from 'react';
import AboutMe from './Intro/AboutMe.jsx';
import Knowledge from './Intro/Knowledge.jsx';
import Skills from './Intro/Skills.jsx';

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
        <Skills />
      </div>
    )
  }
}

export default About;