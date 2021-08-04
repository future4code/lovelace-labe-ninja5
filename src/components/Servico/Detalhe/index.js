import React, { Component } from "react";

export default class DetalheServico extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.trocarTela("lista")}>
          Ir para lista
        </button>
      </div>
    );
  }
}
