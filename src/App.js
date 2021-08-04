import React, { Component } from "react";

import CadastrarServico from "./components/CadastrarServico";
import ContratarServico from "./components/Servico/Lista";
import Carrinho from "./components/Carrinho";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header";
import TelaServico from "./components/Servico";

import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Revalia", cursive;
`;

export default class App extends Component {
  state = {
    tela: "inicial",
    carrinho: [],
  };

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];

    this.setState({ carrinho: carrinhoAtualizado });

    toast.success("Serviço adicionado ao carrinho", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  // deletarItemCarrinho = (item.id) => {

  // }

  renderizarTelaAtual = () => {
    switch (this.state.tela) {
      case "inicial":
        return <TelaInicial trocarTela={this.trocarTela} />;
      case "cadastrar":
        return <CadastrarServico trocarTela={this.trocarTela} />;
      case "lista":
        return (
          <TelaServico
            carrinho={this.state.carrinho}
            adicionarAoCarrinho={this.adicionarAoCarrinho}
          />
        );
      case "carrinho":
        return (
          <Carrinho
            carrinho={this.state.carrinho}
            trocarTela={this.trocarTela}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <Container>
        <Header trocarTela={this.trocarTela} />
        {this.renderizarTelaAtual()}
        <ToastContainer />
      </Container>
    );
  }
}
