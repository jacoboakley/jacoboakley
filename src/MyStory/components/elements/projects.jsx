import React from 'react';

// Import Data for dynamic content
var data = require('../../myData.json');

// Import styles for animation
import './animations/displayProjects.css';

const styles = {
  container: {

    margin: 0,
    padding: 0,
    
    width: '15vw',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    color: 'white',
  },

  heading: {
    cursor: 'pointer',
    fontSize: '2.5vmin',
  },

  project: {
    cursor: 'pointer',
    fontSize: '2vmin'
  }
}

export default class Projects extends React.Component {

  returnHome(e) {
    var landingPage = document.querySelector('#landingPage');
    landingPage.classList.remove("slideUp");
    landingPage.classList.add("slideDown");
  }

  displayProjects(e) {
    var landingPage = document.querySelector('#projects');
    landingPage.classList.toggle("closed");
    landingPage.classList.toggle("open");
  }

  render() {
    return(
      <div style={styles.container}>
        <h3 style={styles.heading} onClick={this.returnHome.bind(this)}>HOME</h3>
        <h3 style={styles.heading} onClick={this.displayProjects.bind(this)}>PROJECTS</h3>
        <div className='closed' id='projects'>
          <p style={styles.project} onClick={this.props.onClick} data-title={data.hello.title} data-content={data.hello.content}>Hello</p>
          <p style={styles.project} onClick={this.props.onClick} data-title={data.cardflip.title} data-content={data.cardflip.content}>CardFlip</p>    
        </div>
      </div>
    )
  }
}