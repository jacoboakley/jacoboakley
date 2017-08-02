import React from 'react';

const styles = {
  container: {
    width: '100%',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  links: {
    padding: '6vmin 1em 0em 1em'
  },

  image: {
    width: '6vmin'
  }
}

const Links = () => (
  <div style={styles.container}>
    <a style={styles.links} href='http://codepen.io/jacoboakley/#' target='_blank'><img style={styles.image} src='assets/icons/codepen.png' alt='Codepen'/></a>
    <a style={styles.links} href='assets/other/resume.pdf'><img style={styles.image} src='assets/icons/document.png' alt='Resume'/></a>
    <a style={styles.links} href='https://github.com/jacoboakley' target='_blank'><img style={styles.image} src='assets/icons/github.png' alt='Github'/></a>
    <a style={styles.links} href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img style={styles.image} src='assets/icons/linkedin.png' alt='Linkedin'/></a>
  </div>
);


export default Links;

//<a style={styles.links} href='https://medium.com/@jacoboakley21' target='_blank'><img style={styles.image} src='assets/icons/medium.png' alt='Medium'/></a>
//<a style={styles.links} href='https://twitter.com/jacoboakley21' target='_blank'><img style={styles.image} src='assets/icons/twitter.png' alt='Twitter'/></a>