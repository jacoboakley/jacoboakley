import React from 'react';

const LinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  imageRendering: 'auto',
  width: '50vw'
}

const Spacing = {
  padding: '0 .5em 0 .5em'
}

const Links = () => (
  <div style={LinksStyle}>
    <a style={Spacing} href='https://medium.com/@jacoboakley21' target='_blank'><img width='30' src='assets/icons/medium.png' alt='Medium'/></a>
    <a style={Spacing} href='https://twitter.com/jacoboakley21' target='_blank'><img width='30' src='assets/icons/twitter.png' alt='Twitter'/></a>
    <a style={Spacing} href='http://codepen.io/jacoboakley/#' target='_blank'><img width='30' src='assets/icons/codepen.png' alt='Codepen'/></a>
    <a style={Spacing} href='assets/other/resume.docx'><img width='30' src='assets/icons/document.png' alt='Resume'/></a>
    <a style={Spacing} href='https://github.com/jacoboakley' target='_blank'><img width='30' src='assets/icons/github.png' alt='Github'/></a>
    <a style={Spacing} href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img width='30' src='assets/icons/linkedin.png' alt='Linkedin'/></a>
  </div>
);


export default Links;