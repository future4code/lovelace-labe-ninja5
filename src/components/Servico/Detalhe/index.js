import React, { Component } from "react";

export default class DetalheServico extends Component {
  render() {
    return (
      <div>
        <p>Essa é a tela com o detalhe do serviço selecionado :D </p>
        <button onClick={() => this.props.trocarTela("lista")}>
          Ir para lista
        </button>
      </div>
    );
  }
}
