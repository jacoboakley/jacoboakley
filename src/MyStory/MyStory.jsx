import React from 'react';

//import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const styles = {
  container: {
    position: 'absolute',

    top: 0,

    height: '100vh',
    width: '100vw',
  }
}

export default class MyStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: "Hello",
      content: "I was born to do one thing but, I haven't been able to find a way to get paid sitting on the couch and binge watching Netflix. So, I decided to start   studying Frontend Web Development. If you ask my family, they will tell you how technically savvy I am. I don't think I would be bragging too much if I said   I am the go to guy when they need someone to hook up their printers. If the word of my family isn't enough keep reading and I may surprise you."
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
      <div style={styles.container}>
        <Sidebar onClick={this.handleClick.bind(this)}/>
        <Content title={this.state.title} content={this.state.content}/>
      </div>
    )
  }
}