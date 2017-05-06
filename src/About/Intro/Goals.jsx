import React from 'react';

const GoalsStyle = {
  height: 'auto',
  width: '50vw',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'justify',

  fontSize: '3vmin'
}

const AvatarStyle = {
  height: '10vmin',
  width: '10vmin',

  margin: '.5em 2em .5em 2em',

  border: '.1em solid black',
  borderRadius: '100%',
}

const Goals = () => (
  <div style={GoalsStyle}>
    <div>
      <h1>My Goals</h1>
      <p>
        I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided  start   studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging  much if I said   I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I may surprise you.
      </p>
    </div>
    <img style={AvatarStyle} src='assets/images/avatar.png' alt='Avatar depicting likeness of author' />
  </div>
);


export default Goals;