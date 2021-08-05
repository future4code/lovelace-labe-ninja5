import React, { Component } from "react";
import axios from "axios";
import CadastrarServico from "./components/CadastrarServico";
// import ContratarServico from "./components/Servico/Lista";
import Carrinho from "./components/Carrinho";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header";
import TelaServico from "./components/Servico";

import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import DetalheServico from "./components/Servico/Detalhe";

const Container = styled.div`
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Revalia", cursive;
`;

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "553d7058-9437-416b-b020-7eaaa0867ceb"
  },
};

export default class App extends Component {
  state = {
    tela: "inicial",
    carrinho: [],
    carrinhoList: []
  };

  trocarTela = (tela) => {
    this.setState({ tela: tela });
  };

  getJobsById = async (jobID) => {
    try {
      const res = await axios.get(`${url}/${jobID}`, headers)
      this.setState({ carrinhoList: res.data })
      console.log('Data:', res.data)
    } catch (err) {

    }
  }

  adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];

    this.setState({ carrinho: carrinhoAtualizado });

    toast.success("Serviço adicionado ao carrinho", {
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
            getJobsById={this.getJobsById}
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            trocarTela={this.trocarTela}
          />
        );
      case "carrinho":
        return (
          <Carrinho
            carrinho={this.state.carrinho}
            trocarTela={this.trocarTela}
          />
        );
      case "detalhes":
        return (
          <DetalheServico
            trocarTela={this.trocarTela}
          />
        )

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
