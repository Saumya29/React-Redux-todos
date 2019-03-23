import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my App</h1>
        <p>
          <Link to="/todos">See my todos</Link>
        </p>
        <p>
          <Link to="/todos/new">Add new todos</Link>
        </p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
