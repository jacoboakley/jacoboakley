import React from 'react';

const styles = {
  image: {
    height: '15vmin',
    width: '15vmin',

    borderRadius: '100%'
  }
}

const Avatar = (props) => (
  <div>
    <img style={styles.image} src='assets/images/avatar.png' alt='Avatar depicting likeness of author' />
  </div>
);


export default Avatar;