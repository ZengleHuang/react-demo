import React, { Component } from 'react';

import Header from './pages/Header'
import CreateTodo from './pages/CreateTodo';
import Content from './pages/Content';
import Footer from './pages/Footer';

import './index.css';

export default class ReduxTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todoList: [
          {
            id: '1',
            value: '000001',
            createDate: '2019-04-16',
            completed: true,
          },
          {
            id: '2',
            value: '000002',
            createDate: '2019-04-14',
            completed: false,
          }
        ],
        todoType: 'all',
        cancelLength: 0,
      };
      this.handleCreate = this.handleCreate.bind(this);
      this.handleTabChange = this.handleTabChange.bind(this);
      this.handleAction = this.handleAction.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.filteredTodoList = this.filteredTodoList.bind(this);
    }
  
    handleTabChange(type) {
      this.setState({ todoType: type });
    }
  
    filteredTodoList() {
      const { todoList = [], todoType } = this.state;
      switch(todoType) {
        case 'all':
          return todoList;
        case 'completed':
        return todoList.filter(function (todo) {
          return todo.completed
        });
        case 'cancel':
          return  todoList.filter(function (todo) {
            return !todo.completed
          });
        default:
          return todoList
      }
    }
  
    handleCreate(todo) {
      const { todoList = [] } = this.state;
      this.setState({
          todoList: [todo, ...todoList],
        });
    }
  
    handleAction(todo, flag) {
      const { todoList = [] } = this.state;
      const newList = todoList.filter((item) => item.id !== todo.id);
      this.setState({ todoList: [...newList, { ...todo, completed: flag }] })
    }
  
    handleRemove(todo) {
      const { todoList = [] } = this.state;
      const newList = todoList.filter((item) => item.id !== todo.id);
      this.setState({ todoList: newList })
    }
  
    render() {
      const { todoType } = this.state;
      const list = this.filteredTodoList() || [];
      return (
        <React.Fragment>
          <Header />
          <CreateTodo
            onCreate={this.handleCreate}
          />
          <Content
            list={list}
            todoType={todoType}
            onChange={this.handleTabChange}
            onAction={this.handleAction}
            onRemove={this.handleRemove}
          >
          </Content>
            <Footer total={list.length} />
        </React.Fragment>
      );
    }
  }
  