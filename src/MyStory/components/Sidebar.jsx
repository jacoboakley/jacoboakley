import React from 'react';
import Links from './elements/links';
import Projects from './elements/sidebar/projects';

const styles = {
  sidebar: {
    position: 'absolute',

    top: 0,
    left: 0,
    margin: 0,
    padding: 0,

    height: '100vh',
    width: '15vw',

    background: 'rgba(0, 0, 0, 1)',
  },
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside style={styles.sidebar}>
        <Projects onClick={this.props.onClick} />
        <Links />
      </aside>
    )
  }
}