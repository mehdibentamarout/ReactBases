import React, { Component } from "react";
export class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.ClickHander}>Click Me</button>
      </div>
    );
  }
}
export default ClassClick;
