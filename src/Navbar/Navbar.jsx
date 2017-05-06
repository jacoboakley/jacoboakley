import React from 'react';
import Links from './Links.jsx';
import Avatar from './Avatar.jsx';

const NavStyle = {
  position: 'fixed',
  top: '0',
  left: '0',

  height: 'auto',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',

  background: '#eee',
}

const Navbar = (props) => (
  <nav style={NavStyle} {...props}>
    <Avatar />
    <Links />
  </nav>
);



export default Navbar;