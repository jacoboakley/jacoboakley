import React from 'react';
import Title from './Title.jsx';
import Links from './Links.jsx';

const NametagStyle = {
  height: '65vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  background: 'url("assets/images/night.png")',
  backgroundSize: '100vw 65vh'
}

const Nametag = () => (
  <div style={NametagStyle}>
    <Title />
    <Links />
  </div>
);


export default Nametag;