import React from 'react';

const styles = {
  container: {
    position: 'absolute',
    top: '15vw',

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
    fontSize: '2.5vmin',
  },

  project: {
    cursor: 'pointer',
    fontSize: '2vmin'
  }
}

export default class Projects extends React.Component {
  render() {
    return(
      <div style={styles.container}>
        <h3 style={styles.heading}>PROJECTS</h3>
        <p style={styles.project} onClick={this.props.onClick} data-title='CardFlip' data-content='Hello CardFlip'>CardFlip</p>    
      </div>
    )
  }
}