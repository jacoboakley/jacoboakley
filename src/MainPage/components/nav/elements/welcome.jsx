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
      <a style={styles.container} onClick={this.props.onClick} key={data[0].id} data-title={data[0].title} data-content={data[0].content} className='nav-button side' href='#'>
        <p data-title={data[0].title} data-content={data[0].content}>W</p>
        <p data-title={data[0].title} data-content={data[0].content}>E</p>
        <p data-title={data[0].title} data-content={data[0].content}>L</p>
        <p data-title={data[0].title} data-content={data[0].content}>C</p>
        <p data-title={data[0].title} data-content={data[0].content}>O</p>
        <p data-title={data[0].title} data-content={data[0].content}>M</p>
        <p data-title={data[0].title} data-content={data[0].content}>E</p>
      </a>
    )
  }
}