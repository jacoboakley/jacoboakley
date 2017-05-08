import React from 'react'

const AvatarStyle = {
  height: '10vmin',
  width: '10vmin',

  margin: '.5em 2em .5em 2em',

  alignItems: 'center',
  display: 'flex',

  border: '.1em solid black',
  borderRadius: '100%',
}

const Avatar = () => (
  <div>
    <img style={AvatarStyle} src='assets/images/avatar.png' alt='Avatar depicting likeness of author' />
  </div>
);


export default Avatar;