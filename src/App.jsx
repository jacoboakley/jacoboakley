import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

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
          <Sidebar />          
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
