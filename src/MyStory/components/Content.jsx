import React from 'react';

const styles = {
  container: {
    position: 'absolute',

    top: 0,
    left: '15vw',

    height: '100vh',
    width: '85vw',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },

  paragraph: {
    padding: '0 5vmin 0 5vmin',

    lineHeight: '200%',
    textAlign: 'justify',
  }
}

export default class Content extends React.Component {
  render() {
    return(
      <div style={styles.container}>
        <h1>{this.props.title}</h1>
        <p style={styles.paragraph}>
          {this.props.content}
        </p>
      </div>
    )
  }
}