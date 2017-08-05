import React from 'react';

// Import Elements
import Title from './elements/nametag/Title';
import Links from './elements/nametag/Links';
import Avatar from './elements/nametag/Avatar';
import Button from './elements/nametag/Button';

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
  <div style={styles.container}>
    <Avatar />
    <Title />
    <Links />
    <Button />
  </div>
)

export default Nametag