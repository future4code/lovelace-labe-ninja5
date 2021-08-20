import React, { Component } from "react";

import CadastrarServico from "./components/CadastrarServico";
import ContratarServico from "./components/Servico/Lista";
import Carrinho from "./components/Carrinho";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header";
import TelaServico from "./components/Servico";

import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

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

  componentDidMount() {
    const carrinho = localStorage.getItem("items");

    if (carrinho) {
      this.setState({ carrinho: JSON.parse(carrinho) });
    }
  }

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];

    this.setState({ carrinho: carrinhoAtualizado });

    toast.success("Serviço adicionado ao carrinho com sucesso!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    localStorage.setItem("items", JSON.stringify(carrinhoAtualizado));
  };

  deletarItemCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter((item) => item.id !== id);
    this.setState({ carrinho: novoCarrinho });
    toast.success("Serviço removido do carrinho com sucesso!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    localStorage.setItem("items", JSON.stringify(novoCarrinho));
  };

  limparCarrinho = () => {
    this.setState({ carrinho: [], totalCarrinho: 0 });
    toast.success("Sucesso na contratação", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

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
            deletarItem={this.deletarItemCarrinho}
            limparCarrinho={this.limparCarrinho}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Header trocarTela={this.trocarTela} />
          {this.renderizarTelaAtual()}
          <ToastContainer />
        </Container>
      </>
    );
  }
}
