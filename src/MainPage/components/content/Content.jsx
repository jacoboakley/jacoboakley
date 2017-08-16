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
        <iframe height='700' scrolling='no' title={this.props.title} src={this.props.source} frameborder='no' allowtransparency='true' allowfullscreen='true' style={{width: '75%'}}>
</iframe>
      </div>
    )
  }
}