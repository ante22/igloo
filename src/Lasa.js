import React, { Component } from "react";

class Lasa extends Component {
  render() {
    return (
      <div>
        <p>Klasična komponenta 2: {this.props.children}</p>
      </div>
    );
  }
}

export default Lasa;
