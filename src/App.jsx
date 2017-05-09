import React from 'react';
import { BrowserRouter as Router, Route, HashHistory } from 'react-router-dom';

/* My Components */
import About from './About/About.jsx';
import Hello from './Hello.jsx';
import World from './World.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Nametag from './Jumbotron/Nametag.jsx';


/* My App */
class App extends React.Component {
  render() {
    return (
      <Router history={HashHistory}>
        <div>
          <Navbar />
          <Nametag />
            <div>
              <Route exact={true} path="/" render={() => (
                <About />
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
