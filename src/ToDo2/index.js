import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

export default class Todo2 extends Component {
    render(){
        const store = createStore(rootReducer)
        return (
          <div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
      );
    }
}
