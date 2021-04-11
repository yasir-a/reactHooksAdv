import React, { Component } from "react";

export class RenderPropCommon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log("render props", this.props);
    return <div>{this.props.render(this.state.count, this.handleCount)}</div>;
  }
}

export default RenderPropCommon;
