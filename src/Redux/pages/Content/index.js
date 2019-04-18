import React from 'react';
import TodoList from '../../components/TodoList';

import './index.css';

export default class Content extends React.Component {

  render() {
    const { todoType, list = [], onChange = e => e, onAction = e => e, onRemove = e => e } = this.props;
    return (
      <div className="content">
        <div className="content-heading">
          <span>任务列表</span>
          <div className="btn-group button-list">
            <button
              type="button"
              className="btn"
              onClick={() =>onChange('all')}
            >
              全部
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => onChange('completed')}
            >
              已完成
            </button>
            <button 
              type="button"
              className="btn"
              onClick={() => onChange('cancel')}
            >
              未完成
            </button>
          </div>
        </div>
          <TodoList
            list={list}
            onAction={onAction}
            onRemove={onRemove}
            />
            {this.props.children}
      </div>
    );
  }
}