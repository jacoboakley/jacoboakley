import React from 'react';

const styles = {
  container: {
    padding: '0',
    margin: '0',


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',

    fontSize: '3vmin',
  },

  paragraph: {

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

const Skills = () => (
  <div style={styles.container}>
    <div style={styles.paragraph}>
      <h1>What I Can Do</h1>
      <p>
        I am a developing Frontend Web Developer that uses React to create lightweight web applications focusing on speed and design. I also work with Three.js and Blender to create 3D objects that can be rendered using WebGL and a web browser.
      </p>
    </div>
  </div>
);


export default Skills;