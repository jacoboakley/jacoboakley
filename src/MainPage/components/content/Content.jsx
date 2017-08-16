import React from 'react';

import './animations/scale.css';

const styles = {
  container: {
    marginTop: '15vh',
    marginLeft: '5vw',

    height: '80vh',
    width: '90vw',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    color: 'white',
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
      <div style={styles.container} className='hide scaleDown' id='content'>
        <h1><a href={this.props.link} target='_blank'>{this.props.title}</a></h1>
        <h3>{this.props.madeWith}</h3>
        <p style={styles.paragraph}>
          {this.props.content}
        </p>
      </div>
    )
  }
}