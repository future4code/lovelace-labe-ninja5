import React, { Component } from "react";

export default class ListaServico extends Component {
  render() {
    return (
      <div>
        <p>Aqui serão mostrados todos serviços oferecidos :D </p>
        <button onClick={() => this.props.trocarTela("detalhes")}>
          Ir para detalhe
        </button>
      </div>
    );
  }
}
