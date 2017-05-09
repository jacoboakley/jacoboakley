import React from 'react'

const WorldStyle = {
  position: 'absolute',
  marginTop: '65vh',

  background: 'white',
}

class World extends React.Component {
  render() {
    return (
      <div style={WorldStyle}>
        Hosted on Netlify 
      </div>
    );
  }
}

export default World;