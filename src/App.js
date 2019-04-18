import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

import CommonDemo from './Comments/CommentDemo';
import ReactList from './List/index';
import ReduxTest from './Redux/index';
import Todo2 from './ToDo2/index';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.showOther = this.showOther.bind(this);
  }

  showOther() {
    return <div> render other </div>
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Router history={history}>
          <>
            <div className="left">
              <ul>
                <li><Link to="/">JSX</Link></li>
                <li><Link to="/list">列表</Link></li>
                <li><Link to="/comment">评论</Link></li>
                <li><Link to="/todo">TODO</Link></li>
                <li><Link to="/todo2">TODO2</Link></li>
              </ul>
            </div>
            <div className="right">
              <Switch>
                <Route path="/" exact component={CommonDemo} />
                <Route path="/list" exact component={ReactList} />
                <Route path="/comment" exact component={CommonDemo} />
                <Route path="/todo" exact component={ReduxTest} />
                <Route path="/todo2" exact component={Todo2} />
                </Switch>
            </div>
          </>
        </Router>
      </div> 
    );
  }
}

