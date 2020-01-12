import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
//import Login from './Login.js';
//import Register from './Register.js';
import Todos from './Todos.js';
//import NotFound from './NotFound.js';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      {/* <Route path='/Login' component={Login} />
      <Route path='/Register' component={Register} /> */}
      <Route path='/Todos' component={Todos} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
  , document.getElementById('root')); 