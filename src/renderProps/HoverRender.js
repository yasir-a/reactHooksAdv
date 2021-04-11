import React, { Component } from "react";

export class HoverRender extends Component {
  render() {
    const { count, handleCount } = this.props;
    return (
      <div>
        <h1>Hover Render</h1>
        <label onMouseOver={handleCount}>label{count}</label>
      </div>
    );
  }
}

export default HoverRender;
