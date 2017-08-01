import React from 'react';

// Import Elements
import Title from './elements/Title.jsx';
import Links from './elements/Links.jsx';
import Avatar from './elements/Avatar.jsx';

// Styles
import './psuedoStyles/buttonEffects.css';

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

  button: {
    marginTop: '6vmin',

    height: '8vmin',
    width: '30vmin',

    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    background: 'transparent',
    border: '1px solid #8a0099',
    color: '#8a0099',
    cursor: 'pointer',
    fontSize: '5vmin',
  }
}

export default class Nametag extends React.Component {

  handleClick(e) {
    var landingPage = document.querySelector('#landingPage');
    landingPage.classList.add("active");
  }

  render() {
    return (
      <div style={styles.container}>
        <Avatar />
        <Title />
        <Links />
        <a style={styles.button} className='button-hover button-active' onClick={this.handleClick.bind(this)}>Continue</a>
      </div>
    )
  }
}
