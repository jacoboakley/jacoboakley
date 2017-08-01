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

const Knowledge = () => (
  <div style={styles.container}>
    <div style={styles.paragraph}>
      <h1>What I know</h1>
      <p>
        Here is where I am supposed to impress you with my wealth of knowledge. I have learned three things so far.
      </p>
      <ol>
        <li>There is always more to learn.</li>
        <li>Someone knows more than you.</li>
        <li>If you don't know it, Google it</li>
      </ol>
    </div>
  </div>
);


export default Knowledge;