import React from 'react';
import Projects from './elements/projects';

const styles = {
  sidebar: {
    position: 'absolute',

    top: 0,
    left: 0,
    margin: 0,
    padding: 0,

    height: '100vh',

    background: 'rgba(0, 0, 0, .25)',
  },
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside style={styles.sidebar}>
        <Projects onClick={this.props.onClick} />
      </aside>
    )
  }
}