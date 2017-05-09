import React from 'react';
import Avatar from '../../Shared/Avatar.jsx';

const SkillsStyle = {
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

const Skills = () => (
  <div style={SkillsStyle}>
    <div style={ParagraphStyle}>
      <h1>What I Can Do</h1>
      <p>
        I am a developing Frontend Web Developer that uses React to create lightweight web applications focusing on speed and design. I also work with Three.js and Blender to create 3D objects that can be rendered using WebGL and a web browser.
      </p>
    </div>
    <Avatar />
  </div>
);


export default Skills;