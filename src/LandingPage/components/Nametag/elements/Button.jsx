import React from 'react';

// Styles
import './animations/buttonEffects.css';

const styles = {
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
    fontFamily: 'Parisienne',
    fontSize: '5vmin',
  }
}

export default class Button extends React.Component {

  handleClick(e) {
    var landingPage = document.querySelector('#landingPage');
    landingPage.classList.add("active");
  }

  render() {
    return (
      <div>
        <a style={styles.button} 
           className='button-hover button-active' 
           onClick={this.handleClick.bind(this)}
        >Continue</a>
      </div>
    )
  }
}