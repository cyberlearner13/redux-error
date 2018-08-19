import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {createStore}>
    <Router>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
      </App>
    </Router>
  </Provider>
  ,document.querySelector("#root"));
