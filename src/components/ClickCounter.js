import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, handleCounter } = this.props;
    return (
      <div>
        <h1>ClickCounter{this.props.name}</h1>
        <button onClick={handleCounter}>{`Click!:${count}`}</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
