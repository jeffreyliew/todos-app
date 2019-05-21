import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { generateId } from "../utils";
import { addTodo, removeTodo, toggleTodo } from "../actions/todos";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    this.props.dispatch(
      addTodo({
        id: generateId(),
        name,
        complete: false
      })
    );
  };

  removeItem = todo => {
    this.props.dispatch(removeTodo(todo.id));
  };

  toggleItem = id => {
    this.props.dispatch(toggleTodo(id));
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          remove={this.removeItem}
          items={this.props.todos}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
