import React, { Component } from "react";

export class Train extends Component {
  constructor() {
    super();

    this.state = {
      message: 0,
    };
  }
  changeMessage() {
    this.setState({
      message: this.setState.message + 5,
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>Hello</button>
      </div>
    );
  }
}

export default Train;
