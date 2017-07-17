import React from 'react';
import Links from './Links.jsx';

const NavStyle = {
  height: 'auto',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  zIndex: '1'
}

const Navbar = (props) => (
  <nav style={NavStyle} {...props}>
    <Links />
  </nav>
);



export default Navbar;