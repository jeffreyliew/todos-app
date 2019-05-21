import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { generateId } from "../utils";
import { addGoal, removeGoal } from "../actions/goals";

class Goals extends React.Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    this.props.dispatch(
      addGoal({
        id: generateId(),
        name
      })
    );
  };

  removeItem = goal => {
    this.props.dispatch(removeGoal(goal.id));
  };

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List remove={this.removeItem} items={this.props.goals} />
      </div>
    );
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
