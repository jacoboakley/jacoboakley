import React from 'react';

// Import Data for dynamic content
var data = require('../../data/projects.json');

// Import styles for animation
import './animations/navButton.css';
import './animations/displayProjects.css';
import './animations/projectsList.css';

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

  projectList: {
    width: '80vw',

    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  projects: {
    margin: 0,
    padding: '2vmin',

    color: '#8a0099',
    cursor: 'pointer',
    fontSize: '3.5vmin',
  }
}

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    const projectArray = [];
    this.state = {projects: projectArray}

    for(var i = 1; i < data.length; i++) {
      var project = data[i];
      projectArray.push(<a href='#' style={styles.projects} onClick={this.props.onClick} className='projects' key={project.id} data-title={project.title} data-content={project.content} data-made={project.madeWith} data-link={project.link} data-source={project.source}>{project.title}</a>)
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
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>R</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>O</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>J</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>E</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>C</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>T</p>
        <p style={{paddingLeft: '5vmin', textShadow: '.25vmin .25vmin 0 #8a0099',}}>S</p>
        </a>
        <div style={styles.projectList} className='closed' id='projects'>
          {this.state.projects}
        </div>
      </div>
    )
  }
}