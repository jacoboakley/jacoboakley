import React from 'react';

// Import Elements
import Title from './elements/Title.jsx';
import Links from './elements/Links.jsx';
import Avatar from '../Shared/Avatar.jsx';
import Button from '../Shared/Button.jsx';

// Import Styles
import './styles/nametag.css'

const Nametag = () => (
  <div className='nametag'>
    <Avatar />
    <Title />
    <Links />
    <Button title='See More' className='button' />
  </div>
);

export default Nametag;