import React from 'react';
import Avatar from '../../Shared/Avatar.jsx';

const KnowledgeStyle = {
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

const Knowledge = () => (
  <div style={KnowledgeStyle}>
    <Avatar />
    <div style={ParagraphStyle}>
      <h1>My Knowledge</h1>
      <p>
        Here is where I am supposed to impress you with my wealth of knowledge. I have learned three things so far.
      </p>
      <ol>
        <li>Someone always knows more than you.</li>
        <li>There is always more to learn.</li>
        <li>If you don't know it, Google it</li>
      </ol>
    </div>
  </div>
);


export default Knowledge;