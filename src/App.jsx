import React from 'react';

/* My Components */
import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';

/* Space Animation */
require('./LandingPage/animations/space.js');


/* My App */
class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <MainPage />
      </div>
    );
  }
}

export default App;
