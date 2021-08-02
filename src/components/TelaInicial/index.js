import React, { Component } from "react";

export default class TelaInicial extends Component {
  render() {
    return (
      <div>
        <p>Essa é a tela inicial :D</p>
        <button onClick={() => this.props.trocarTela("cadastrar")}>
          Cadastrar serviço
        </button>
        <button onClick={() => this.props.trocarTela("lista")}>
          Contratar serviço
        </button>
      </div>
    );
  }
}
