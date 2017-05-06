import React from 'react'
import { Link } from 'react-router-dom';

const DivStyle = {
  display: 'flex',
}

const LinkStyle = {
  padding: '1em',

  color: 'white',
  fontSize: '1.5em',
  textShadow: '0 0 .5em black',
  textDecoration: 'none'
}


const Links = () => (
  <div style={DivStyle}>
    <Link to="/" style={LinkStyle}>Home</Link>
    <Link to="/hello" style={LinkStyle}>Hello</Link>
    <Link to="/world" style={LinkStyle}>World</Link>
  </div>
);


export default Links;