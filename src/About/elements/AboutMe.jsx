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

const AboutMe = () => (
  <div style={styles.container}>
    <div style={styles.paragraph}>
      <h1>Who I am</h1>
      <p>
        I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided  start   studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging  much if I said   I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I may surprise you.
      </p>
    </div>
  </div>
);


export default AboutMe;