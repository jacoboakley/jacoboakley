import React from 'react';

/* My Components */
import LandingPage from './LandingPage/LandingPage';
import MyStory from './MyStory/MyStory';


/* My App */
class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <MyStory />
      </div>
    );
  }
}

export default App;
