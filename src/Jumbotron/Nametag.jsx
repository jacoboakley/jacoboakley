import React from 'react';
import Title from './Title.jsx';
import Links from './Links.jsx';
import Avatar from '../Shared/Avatar.jsx';
import Button from '../Shared/Button.jsx';

const NametagStyle = {
  position: 'absolute',
  margin: '0',
  padding: '0',

  height: '100vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  zIndex: 1,
}

const ButtonStyle = {
  padding: '5em',
}

const Nametag = () => (
  <div style={NametagStyle}>
    <Avatar />
    <Title />
    <Links />
    <Button title='See More' style={ButtonStyle} />
  </div>
);


export default Nametag;