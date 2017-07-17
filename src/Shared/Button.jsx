import React from 'react';

const ButtonStyle = {
  margin: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  background: 'transparent',
  border: '1px solid #8a0099',
  color: '#8a0099',
  cursor: 'pointer',
  fontSize: '5vmin',
}

const Button = (props) => (
  <button title={props.title} style={ButtonStyle} >{props.title}</button>
);

export default Button