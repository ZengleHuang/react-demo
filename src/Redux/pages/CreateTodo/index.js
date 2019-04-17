import React from 'react';
import uuid from 'uuid/v4';

import './index.css';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.state = {
      newTodo: '',
      errorFlag: false,
    }
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({ newTodo: value });
  }

  handleCreate() {
    const { onCreate = e => e } = this.props;
    const { newTodo = '' } = this.state;
    if (!newTodo) {
      this.setState({ errorFlag: true });
      return;
    }
    const todo = {
      id: uuid(),
      value: newTodo,
      createDate: "2019-04-01",
      completed: false
    };
    onCreate(todo);
  }

  render() {
    const { newTodo, errorFlag } = this.state;

    return (
      <div className="create-todo">
        <input
          type="text"
          className="form-control"
          placeholder="今天计划完成什么？"
          value={newTodo}
          onChange={this.handleInputChange}
        />
        <button type="button" className="btn" onClick={this.handleCreate}>添加任务</button>
      </div>
    );
  }
}