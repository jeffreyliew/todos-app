import React from "react";
import Todos from "./Todos";
import Goals from "./Goals";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default connect()(App);
