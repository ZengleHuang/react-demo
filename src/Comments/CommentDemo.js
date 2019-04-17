import React, { Component } from 'react';
import CommonInput from './CommonInput';
import CommonList from './CommonList';

import '../App.css';

class CommonDemo extends Component {

    constructor(){
        super()
        this.state = {
          comments: []
        }
      }

    render() {
        return (
            <div className="comment-main">
                <CommonInput onSubmit={this.handleSubmitCommon.bind(this)}/>
                <CommonList comments={this.state.comments}/>
            </div> 
        )
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

export default CommonDemo;