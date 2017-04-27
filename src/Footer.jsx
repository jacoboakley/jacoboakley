import React from 'react';

class Footer extends React.Component {
  render() {
    return(
        <div id='footer'>
            <a href='https://medium.com/@jacoboakley21' target='_blank'><img src='assets/icons/medium.png' /></a>
            <a href='https://twitter.com/jacoboakley21' target='_blank'><img src='assets/icons/twitter.png' /></a>
            <a href='http://codepen.io/jacoboakley/#' target='_blank'><img src='assets/icons/codepen.png' /></a>
            <a href='assets/other/resume.docx'><img src='assets/icons/document.png' /></a>
            <a href='https://github.com/jacoboakley' target='_blank'><img src='assets/icons/github.png' /></a>
            <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img src='assets/icons/linkedin.png' /></a>
        </div>
    )
  }
}

export default Footer;