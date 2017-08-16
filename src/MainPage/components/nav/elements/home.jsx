import React from 'react';

import './animations/navButton.css';

const styles = {
  container: {
    position: 'absolute',
    
    paddingLeft: '2vmin',
    paddingRight: '2vmin',

    height: '100vh',

    color: 'white',
    cursor: 'pointer',
    fontSize: '2.5vmin',
    textDecoration: 'none',
  },
}

export default class Home extends React.Component {

  returnHome(e) {
    var landingPage = document.querySelector('#landingPage');
      landingPage.classList.remove("fadeOut");
      landingPage.classList.add("fadeIn");

    var mainPage = document.querySelector('#content');
      mainPage.classList.toggle("scaleUp");
      mainPage.classList.toggle("scaleDown");    

    var nav = document.querySelector('#nav');
      nav.classList.toggle("display");
      nav.classList.toggle("hide");
  }

  render() {
    return (
      <a style={styles.container} onClick={this.returnHome.bind(this)} className='nav-button side' href='#'>
        <p>H</p>
        <p>O</p>
        <p>M</p>
        <p>E</p>
      </a>
    )
  }
}