import React from 'react';
import Avatar from '../../Shared/Avatar.jsx';

const AboutMeStyle = {
  padding: '0',
  margin: '0',

  height: 'auto',
  width: '100vw',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'justify',

  fontSize: '3vmin',
}

const ParagraphStyle = {
  width: '50vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const AboutMe = () => (
  <div style={AboutMeStyle}>
    <div style={ParagraphStyle}>
      <h1>About Me</h1>
      <p>
        I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided  start   studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging  much if I said   I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I may surprise you.
      </p>
    </div>
    <Avatar />
  </div>
);


export default AboutMe;