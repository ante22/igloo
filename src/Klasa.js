import React, { Component } from "react";
class Klasa extends Component {
  render() {
    const { ime, godine } = this.props;
    return (
      <div>
        <p>
          Ovo je Klasa componemt iz Klasa js, Klasa componemt :{ime},{godine}
        </p>
      </div>
    );
  }
}

export default Klasa;
