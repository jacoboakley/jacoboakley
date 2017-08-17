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

    let test = null;

    if(this.props.title === 'Hello') {
      test = <div>
                <h1 style={{textAlign: 'center'}}>{this.props.title}</h1>
                <p style={styles.paragraph}>
                  {this.props.content}
                </p>
              </div>
    }
    else {
      test = <iframe height='700' scrolling='no' title={this.props.title} src={this.props.source} frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}} alt={this.props.content}>
        </iframe>
    }

    return(
      <div style={styles.container} className='hide scaleDown' id='content'>
        {test}
      </div>
    )
  }
}