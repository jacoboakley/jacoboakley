import React from 'react';

const Button = (props) => (
  <button title={props.title} className={props.className} style={props.style} >
    {props.title}
  </button>
);

export default Button