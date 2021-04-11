import React, { Component } from "react";

export class CounterRender extends Component {
  render() {
    const { count, handleCount } = this.props;
    return (
      <div>
        <h1>Counter Render</h1>
        <button onClick={handleCount}>Click{count}</button>
      </div>
    );
  }
}

export default CounterRender;
