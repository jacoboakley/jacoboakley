import React from 'react';

/* Components */
import Nametag from './components/nametag/Nametag.jsx';



import './animations/slideEffect.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Nametag />
      </div>
    );
  }
}