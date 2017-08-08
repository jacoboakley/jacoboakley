import React from 'react';

import './animations/displayNav.css';

import Projects from './elements/projects';
import Home from './elements/home';
import Welcome from './elements/welcome';

const styles = {
  container: {
    color: 'white',
    zIndex: 1,
  },
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav style={styles.container} className='hide' id='nav'>
        <Home />
        <Welcome onClick={this.props.onClick} />
        <Projects onClick={this.props.onClick} />
      </nav>
    )
  }
}