import React from 'react';


import Nav from './components/nav/Nav';
import Content from './components/content/Content';

// Import Data for dynamic content
var data = require('./components/data/projects.json');

const styles = {
  container: {
    position: 'absolute',

    top: 0,

    height: '100vh',
    width: '100vw',
    zIndex: '1',
  }
}

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: data[0].title,
      content: data[0].content
    }
  }

  handleClick(e) {
    var title = e.target.dataset.title;
    var content = e.target.dataset.content;
    this.setState({
      title: title,
      content: content
    })
  }

  render() {
    return(
      <div style={styles.container} >
        <Nav onClick={this.handleClick.bind(this)}/>
        <Content title={this.state.title} content={this.state.content}/>
      </div>
    )
  }
}