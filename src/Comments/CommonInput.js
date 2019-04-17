import React, { Component } from 'react';

class CommonInput extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            content: "评论"
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <span>用户名：</span>
                        <div>
                            <input value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div>
                        <span>评论：</span>
                        <div>
                            <textarea value={this.state.content}
                            onChange={this.contentChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="upButton">
                        <button onClick={this.buttonSubmit.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        )
    }

    handleUsernameChange (event) {
        console.log(event)
        this.setState({
            username: event.target.value
        })
    }

    contentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    buttonSubmit() {
        console.log(this.props)
        if (this.state.content === '') {
            console.log(11111)
        }
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({ username, content })
        }
        this.setState({ content: ''})
    }
}

export default CommonInput;