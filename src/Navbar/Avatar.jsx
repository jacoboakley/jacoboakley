import React from 'react'

const AvatarStyle = {
  height: '5em',
  width: '5em',

  margin: '.5em',

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