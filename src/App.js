import React, { Component } from "react";

import CadastrarServico from "./components/CadastrarServico";
import ContratarServico from "./components/Servico/Lista";
import Carrinho from "./components/Carrinho";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header";
import TelaServico from "./components/Servico";

export default class App extends Component {
  state = {
    tela: "inicial",
  };

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  renderizarTelaAtual = () => {
    switch (this.state.tela) {
      case "inicial":
        return <TelaInicial trocarTela={this.trocarTela} />;
      case "cadastrar":
        return <CadastrarServico trocarTela={this.trocarTela} />;
      case "lista":
        return <TelaServico />;
      case "carrinho":
        return <Carrinho trocarTela={this.trocarTela} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Header trocarTela={this.trocarTela} />

        {this.renderizarTelaAtual()}
      </div>
    );
  }
}
