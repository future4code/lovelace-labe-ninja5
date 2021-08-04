import React, { Component } from "react";
import DetalheServico from "./Detalhe";
import ListaServico from "./Lista";

export default class TelaServico extends Component {
  state = {
    tela: "lista",
  };

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  renderizarTelaDetalhes = () => {
    switch (this.state.tela) {
      case "lista":
        return (
          <ListaServico
            carrinho={this.props.carrinho}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        );
      case "detalhes":
        return <DetalheServico trocarTela={this.trocarTela} />;
    }
  };

  render() {
    return <div>{this.renderizarTelaDetalhes()}</div>;
  }
}
