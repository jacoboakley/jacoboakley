import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';

/* My Components */
import Home from './Home.jsx';
import Hello from './Hello.jsx';
import World from './World.jsx';
import Sidebar from './Sidebar.jsx';

/* My Styles */
const AppStyle = {
  display: 'flex'
};

const ContentStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '80vw'
};

/* My App */
class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div style={AppStyle}>
          <Sidebar>
            <div>
              <Link to="/"><p>Home</p></Link>
              <Link to="/hello"><p>Hello</p></Link>
              <Link to="/world"><p>World</p></Link>
            </div>
            <div>
              <a href='https://medium.com/@jacoboakley21' target='_blank'><img src='assets/icons/medium.png' alt='Medium'/></a>
              <a href='https://twitter.com/jacoboakley21' target='_blank'><img src='assets/icons/twitter.png' alt='Twitter'/></a>
              <a href='http://codepen.io/jacoboakley/#' target='_blank'><img src='assets/icons/codepen.png' alt='Codepen'/></a>
              <a href='assets/other/resume.docx'><img src='assets/icons/document.png' alt='Resume'/></a>
              <a href='https://github.com/jacoboakley' target='_blank'><img src='assets/icons/github.png' alt='Github'/></a>
              <a href='https://www.linkedin.com/in/jacoboakley' target='_blank'><img src='assets/icons/linkedin.png' alt='Linkedin'/></a>
            </div>
          </Sidebar>



          
            <div style={ContentStyle}>
              <Route exact={true} path="/" render={() => (
                <Home />
              )}/>
            <Route path="/hello" component={Hello} />
            <Route path="/world" component={World} />
            </div>  
          


          
        </div>
      </Router>
    );
  }
}

export default App;
