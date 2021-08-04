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
    totalCarrinho: null,
  };

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];

    this.setState({ carrinho: carrinhoAtualizado }, () => {
      this.atualizarTotalCarrinho();
    });

    toast.success("Serviço adicionado ao carrinho", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  deletarItemCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter((item) => item.id !== id);
    this.setState({ carrinho: novoCarrinho }, () => {
      this.atualizarTotalCarrinho();
    });
    toast.success("Serviço deletado", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  atualizarTotalCarrinho = () => {
    const totalCarrinho = this.state.carrinho.reduce((total, itemAtual) => {
      return total + itemAtual.price;
    }, 0);
    this.setState({ totalCarrinho: totalCarrinho });
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
            totalCarrinho={this.state.totalCarrinho}
            limparCarrinho={this.limparCarrinho}
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
