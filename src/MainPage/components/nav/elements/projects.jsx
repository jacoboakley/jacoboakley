import React from 'react';

// Import Data for dynamic content
var data = require('../../data/projects.json');

// Import styles for animation
import './animations/navButton.css';
import './animations/displayProjects.css';

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    
    width: '100vw',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  heading: {
    paddingTop: '2vmin',

    width: '100vw',

    color: 'white',
    cursor: 'pointer',
    fontSize: '2.5vmin',
    textDecoration: 'none',
  },

  project: {
    display: 'inline-block',
    margin: 0,
    padding: '0 1vmin 0 1vmin',

    cursor: 'pointer',
  }
}

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    const projectArray = [];
    this.state = {projects: projectArray}

    for(var i = 1; i < data.length; i++) {
      var project = data[i];
      projectArray.push(<p style={styles.project} onClick={this.props.onClick} key={project.id} data-title={project.title} data-content={project.content} data-made={project.madeWith} data-link={project.link}>{project.title}</p>)
    }
  }

  displayProjects(e) {
    var landingPage = document.querySelector('#projects');
    landingPage.classList.toggle("closed");
    var menu = document.querySelector('#menu');
    menu.classList.toggle("active");
  }

  render() {

    

    return(
      <div style={styles.container}>
        <a style={styles.heading} onClick={this.displayProjects.bind(this)} className='nav-button top' href='#' id='menu'>
        <p>P</p>
        <p style={{paddingLeft: '5vmin'}}>R</p>
        <p style={{paddingLeft: '5vmin'}}>O</p>
        <p style={{paddingLeft: '5vmin'}}>J</p>
        <p style={{paddingLeft: '5vmin'}}>E</p>
        <p style={{paddingLeft: '5vmin'}}>C</p>
        <p style={{paddingLeft: '5vmin'}}>T</p>
        <p style={{paddingLeft: '5vmin'}}>S</p>
        </a>
        <div className='closed' id='projects'>
          {this.state.projects}
        </div>
      </div>
    )
  }
}