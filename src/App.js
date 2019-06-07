import React, { Component } from 'react';
import './Styles.css';
// import components
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';
import DelItem from './components/DelItem';



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
