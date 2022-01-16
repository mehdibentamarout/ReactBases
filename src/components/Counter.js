import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incriment() {
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count -{this.state.count}</div>
        <button onClick={() => this.incriment()}>Incriment</button>
      </div>
    );
  }
}

export default Counter;
