import React from 'react'

const HelloStyle = {
  position: 'absolute',
  marginTop: '65vh',

  background: 'white',
}


class Hello extends React.Component {
  render() {
    return (
      <div style={HelloStyle}>
        Hello 
      </div>
    );
  }
}

export default Hello;