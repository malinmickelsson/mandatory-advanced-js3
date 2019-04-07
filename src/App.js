import React, { Component } from 'react';
import './App.css';
// import components
import Register from './Register';
import Login from './Login';
import TodoList from './TodoList';
import AddItem from './AddItem';
import DelItem from './DelItem';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> This is my header</header>

        <body className="App-body">
          <Register/>
          <Login/>
          <TodoList/>
          <AddItem/>
          <DelItem/>
        </body>

      </div>
    );
  }
}

export default App;
