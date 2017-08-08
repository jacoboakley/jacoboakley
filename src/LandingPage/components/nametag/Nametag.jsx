import React from 'react';

// Import Elements
import Title from './elements/Title';
import Links from './elements/Links';
import Avatar from './elements/Avatar';
import Button from './elements/Button';

const styles = {
  container: {
    position: 'absolute',

    height: '100vh',
    width: '100vw',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    zIndex: 2,
  },
}

const Nametag = () => (
  <div style={styles.container}   id='landingPage'>
    <Avatar />
    <Title />
    <Links />
    <Button />
  </div>
)

export default Nametag