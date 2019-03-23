import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Todo from './Todo';
import { addTodo, removeTodo } from './actionCreators';
import TodoForm from './TodoForm';

class TodoList extends Component {

  handleAdd = val => {
    this.props.addTodo(val);
  }
  removeTodo = id => this.props.removeTodo(id);

  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={index}/>
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
export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);