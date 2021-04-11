import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      console.log("Props passed to HOC", this.props);
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          handleCounter={this.handleCounter}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
