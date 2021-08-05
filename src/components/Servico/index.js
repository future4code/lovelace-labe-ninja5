import React, { Component } from "react";
// import DetalheServico from "./Detalhe";
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
            getJobsById={this.props.getJobsById}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
            listaDeProdutos={this.props.listaDeProdutos}
            trocarTela={this.props.trocarTela}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderizarTelaDetalhes()}</div>;
  }
}
