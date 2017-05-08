import React from 'react';
import Links from './Links.jsx';
import Avatar from '../Shared/Avatar.jsx';

const NavStyle = {
  position: 'fixed',
  top: '0',
  left: '0',

  height: 'auto',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  zIndex: '1'
}

const Navbar = (props) => (
  <nav style={NavStyle} {...props}>
    <Avatar />
    <Links />
  </nav>
);



export default Navbar;