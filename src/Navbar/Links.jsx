import React from 'react'
import { Link } from 'react-router-dom';

const DivStyle = {
  display: 'flex'
}

const LinkStyle = {
  padding: '1em',

  color: 'white',
  fontSize: '5vmin',
  textDecoration: 'none',
  textShadow: '2px 2px 0 #8a0099'
}


const Links = () => (
  <div style={DivStyle}>
    <Link to="/" style={LinkStyle}>About</Link>
    <Link to="/hello" style={LinkStyle}>Hello</Link>
    <Link to="/world" style={LinkStyle}>World</Link>
  </div>
);


export default Links;