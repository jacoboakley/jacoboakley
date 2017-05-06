import React from 'react';

const IntroStyle = {
  height: '60vh',
  width: '50vw',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'justify'
}

const Intro = () => (
  <div style={IntroStyle}>
    <p>
      I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided  start studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging  much if I said I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I mi  surprise you.
    </p>
  </div>
);


export default Intro;