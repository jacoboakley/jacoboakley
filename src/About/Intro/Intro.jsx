import React from 'react';
import AboutMe from './AboutMe.jsx';

const IntroStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

const Intro = () => (
  <div style={IntroStyle}>
    <AboutMe />
  </div>
);


export default Intro;