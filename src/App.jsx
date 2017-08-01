import React from 'react';

/* My Components */
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Gallery from './Gallery/Gallery';


/* My App */
class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <About />
        <Gallery />
      </div>
    );
  }
}

export default App;
