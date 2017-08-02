import React from 'react';

// Import Elements
import Title from './elements/Title.jsx';
import Links from './elements/Links.jsx';
import Avatar from './elements/Avatar.jsx';
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

    zIndex: 1,
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