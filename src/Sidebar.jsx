import React from 'react'
import { Link } from 'react-router-dom';

const SidebarStyle = {
       alignItems: 'center',
       background: '#eee',
       display: 'flex',
       flexDirection: 'column',
       height: '100vh',
       justifyContent: 'space-around',
       overflow: 'auto',
       width: '20vw'
}

const Sidebar = (props) => (
  <div style={SidebarStyle} {...props}>
    <img width='200' src='assets/images/profileImage.jpg' alt='Jacob Oakley' />
    <div>
      <Link to="/"><p>Home</p></Link>
      <Link to="/hello"><p>Hello</p></Link>
      <Link to="/world"><p>World</p></Link>
    </div>      
    <div>
      <a href='https://medium.com/@jacoboakley21' target='_blank'><img width='35' src='assets/icons/medium.png' alt='Medium'/></a>
      <a href='https://twitter.com/jacoboakley21' target='_blank'><img width='35' src='assets/icons/twitter.png' alt='Twitter'/></a>
      <a href='http://codepen.io/jacoboakley/#' target='_blank'><img width='35' src='assets/icons/codepen.png' alt='Codepen'/></a>
      <a href='assets/other/resume.docx'><img width='35' src='assets/icons/document.png' alt='Resume'/></a>
      <a href='https://github.com/jacoboakley' target='_blank'><img width='35' src='assets/icons/github.png' alt='Github'/></a>
      <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img width='35' src='assets/icons/linkedin.png' alt='Linkedin'/></a>
    </div>
  </div>
);



export default Sidebar;