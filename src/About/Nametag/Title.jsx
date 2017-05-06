import React from 'react';

const TitleStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',

  color: 'white'
}

const Title = () => (
  <div style={TitleStyle}>
    <p style={{fontSize: '5vmin', margin: '0'}}>
      <strong>Jacob Oakley</strong>
    </p>
    <p style={{fontSize: '3vmin', paddingBottom: '.25rem'}}>
      Frontend Web Developer /<br/>
      Netflix Binge Watcher
    </p>
  </div>
);


export default Title;