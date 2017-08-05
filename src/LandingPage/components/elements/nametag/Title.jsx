import React from 'react';

const styles = {
  container: {
    textAlign: 'center',

    color: 'white',
  },

  name: {
    margin: 0,

    fontFamily: 'Parisienne',
    fontSize: '8vmin',
  },

  title: {
    margin: 0,

    fontSize: '5vmin',
    textShadow: '.25vmin .25vmin 0 #8a0099',
  }
}

const Title = () => (
  <div style={styles.container} className='title'>
    <h1 style={styles.name} className='name'>
      Jacob Oakley
    </h1>
    <p style={styles.title}>
      Frontend Web Developer /<br/>
      Netflix Binge Watcher
    </p>
  </div>
);


export default Title;