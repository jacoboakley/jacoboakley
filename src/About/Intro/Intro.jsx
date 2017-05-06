import React from 'react';
import Goals from './Goals.jsx';

const IntroStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

const Intro = () => (
  <div style={IntroStyle}>
    <Goals />
  </div>
);


export default Intro;