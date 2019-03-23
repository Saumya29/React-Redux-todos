import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Todo from './Todo';
import { addTodo, removeTodo, getTodos } from './actionCreators';
import TodoForm from './TodoForm';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  handleAdd = val => {
    this.props.addTodo(val);
  }
  removeTodo = id => this.props.removeTodo(id);

  render() {
    let todos = this.props.todos.map(val => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val._id)}
        task={val.task}
        key={val._id}/>
    )
   );
    return (
      <div>
        <Route path="/todos/new" component={props => (
          <TodoForm {...props} handleAdd={this.handleAdd}/>
        )}/>
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}
export default connect(mapStateToProps, {addTodo, removeTodo, getTodos})(TodoList);