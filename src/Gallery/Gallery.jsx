import React from 'react';

const GalleryStyle = {
  position: 'absolute',
  top: 0,

  background: 'white',
  zIndex: '-2',
}

class Gallery extends React.Component {
  render() {
    return (
      <div style={GalleryStyle}>
        <p>Hello world</p>
      </div>
    )
  }
}

export default Gallery;