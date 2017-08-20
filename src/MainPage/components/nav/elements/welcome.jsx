import React from 'react';

import './animations/navButton.css';

// Import Data for dynamic content
var data = require('../../data/projects.json');

const styles = {
  container: {
    position: 'absolute',
    right: 0,
    
    paddingRight: '2vmin',
    paddingLeft: '2vmin',
    height: '100vh',

    color: 'white',
    cursor: 'pointer',
    fontSize: '2.5vmin',
    textDecoration: 'none',
  },
}

export default class Welcome extends React.Component {

  render() {
    return (
      <a style={styles.container} onClick={this.props.onClick} key={data[0].id} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith} className='nav-button side' href='#'>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>W</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>E</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>L</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>C</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>O</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>M</p>
        <p style={{textShadow: '.25vmin .25vmin 0 #8a0099',}} data-title={data[0].title} data-content={data[0].content} data-made={data[0].madeWith}>E</p>
      </a>
    )
  }
}