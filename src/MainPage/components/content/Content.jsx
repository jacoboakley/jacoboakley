import React from 'react';

import './animations/scale.css';

const styles = {
  container: {
    marginTop: '20vh',
    marginLeft: '5vw',
    padding: 0,

    height: '75vh',
    width: '90vw',

    
    display: 'flex',
    flexDirection: 'column',

    color: 'white',
  },

  paragraph: {
    padding: '0 5vmin 0 5vmin',

    lineHeight: '200%',
    textAlign: 'justify',

    fontSize: '3.5vmin',
  }
}

export default class Content extends React.Component {
  render() {

    let display = null;

    if(this.props.title === 'Hello') {
      display = <div>
                <h1 style={{textAlign: 'center'}}>{this.props.title}</h1>
                <p style={styles.paragraph}>
                  {this.props.content}
                </p>
              </div>
    }
    else {
      display = <iframe height='700' scrolling='no' title={this.props.title} src={this.props.source} frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}} alt={this.props.content}>
        </iframe>
    }

    return(
      <div style={styles.container} className='hide scaleDown' id='content'>
        {display}
      </div>
    )
  }
}