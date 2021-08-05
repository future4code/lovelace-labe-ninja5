import React, { Component } from "react";
import DetalheServico from "./Detalhe";
import ListaServico from "./Lista";

export default class TelaServico extends Component {
  state = {
    tela: "lista",
    idDetalhe: ""
  };

  trocarTela = (tela, id) => {
    this.setState({ tela: tela, idDetalhe: id });
  };

  renderizarTelaDetalhes = () => {
    switch (this.state.tela) {
      case "lista":
        return (
          <ListaServico
            carrinho={this.props.carrinho}
            trocarTela={this.trocarTela}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        );
      case "detalhes":
        return <DetalheServico trocarTela={this.trocarTela} id={this.state.idDetalhe}/>;
    }
  };

  render() {
    return <div>{this.renderizarTelaDetalhes()}</div>;
  }
}
