import React, { Component } from 'react';

class CommonList extends Component {
    constructor() {
        super()
    }

    static defaultProps = {comments:[]}
    
    render() {
          console.log(this.props)
          return (
            <div>{this.props.comments.map((comment, i) => {
              return (
                <div className='userCommont' key={i}>
                    <span className='userName'>{comment.username}</span> ： 
                    <p className='content'>{comment.content}</p>
                    <hr />
                </div>
              )
            })}</div>
          )
    }
}

export default CommonList;