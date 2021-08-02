import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <p>Eu sou o header!</p>
        <button onClick={() => this.props.trocarTela("inicial")}>
          Botão para voltar para a tela inicial
        </button>
        <button onClick={() => this.props.trocarTela("carrinho")}>
          Eu vou ser o ícone de carrinho
        </button>
      </div>
    );
  }
}
