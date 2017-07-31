import React from 'react';

// Import Elements
import Title from './elements/Title.jsx';
import Links from './elements/Links.jsx';
import Avatar from './elements/Avatar.jsx';

// Import Styles
import './styles/nametag.css'

const Nametag = () => (
  <div className='nametag'>
    <div className='container'>
    <Avatar />
    <Title />
    <Links />
    <a className='button'>See More</a>
    </div>
  </div>
);

export default Nametag;