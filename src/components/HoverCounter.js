import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

export class HoverCounter extends Component {
  render() {
    const { count, handleCounter } = this.props;
    return (
      <div>
        <label onMouseOver={handleCounter}>{`Count Hover:${count}`}</label>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
