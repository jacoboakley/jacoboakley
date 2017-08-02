import React from 'react';

const styles = {
  container: {
    position: 'absolute',
    top: '2vh',

    height: '10vw',
    width: '15vw',

    textAlign: 'center',
  },

  image: {
    height: '8vw',
    width: '8vw',

    borderRadius: '100%',
    cursor: 'pointer'
  }
}

export default class Avatar extends React.Component {

  handleClick(e) {
    var landingPage = document.querySelector('#landingPage');
    landingPage.classList.remove("slideUp");
    landingPage.classList.add("slideDown");
  }

  render() {
    return(
      <div style={styles.container}>
        <img style={styles.image} 
             onClick={this.handleClick.bind(this)}
             src='assets/images/avatar.png' 
             alt='Avatar depicting likeness of author' />
      </div>
    )
  }
}