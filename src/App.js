import React, { Component } from 'react';
import CommonInput from './CommonInput';
import CommonList from './CommonList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }


  render() {
    return (
      <div className="main">
        <CommonInput onSubmit={this.handleSubmitCommon.bind(this)}/>
        <CommonList comments={this.state.comments}/>
      </div> 
    );
  }

  handleSubmitCommon (commont) {
    console.log(commont)
    if(!commont) return
    if(!commont.username) return alert('请输入用户名')
    if(!commont.content) return alert('请输入评论')
    this.state.comments.push(commont);
    this.setState({
      comments: this.state.comments
    })
  }
}

export default App;
