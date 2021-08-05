import React, { Component } from "react";
import Axios from "axios";
import {
  Button,
  AddCarrinho,
  IconeVoltar,
  ConteinerList,
  ContainerBtn,
  Container,
} from "./estilo";

const url = "https://labeninjas.herokuapp.com/";

const headers = {
  headers: {
    Authorization: "553d7058-9437-416b-b020-7eaaa0867ceb",
  },
};

export default class DetalheServico extends Component {
  state = {
    servico: {},
    listaPagamentos: [],
    estaNoCarrinho: false,
  };

  desabilitaBotao = () => {
    this.setState({ estaNoCarrinho: true });
    this.props.adicionarAoCarrinho(this.state.servico);
  };

  componentDidMount() {
    this.getJobById();
  }

  getJobById = () => {
    Axios.get(`${url}jobs/${this.props.id}`, headers)
      .then((res) => {
        this.setState({
          servico: res.data,
          listaPagamentos: res.data.paymentMethods,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const listaPagamentos = this.state.listaPagamentos.map((item, index) => {
      const data = new Date(item.dueDate);
      return <li key={index}>{item}</li>;
    });

    const data = new Date(this.state.servico.dueDate);
    const dataFormatada = data.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });

    const estaNoCarrinho = this.props.carrinho.some(
      (item) => item.id === this.state.servico.id
    );

    return (
      <Container>
        <ConteinerList>
          <h1>{this.state.servico.title}</h1>
          <p>{this.state.servico.description}</p>
          <p>Formas de Pagamento: </p>
          <ul>{listaPagamentos}</ul>
          <p>
            Até {dataFormatada} por R${this.state.servico.price}
          </p>
        </ConteinerList>
        <ContainerBtn>
          <Button onClick={this.desabilitaBotao} disabled={estaNoCarrinho}>
            <AddCarrinho />
            Adicionar ao carrinho
          </Button>
          <Button onClick={() => this.props.trocarTela("lista")}>
            <IconeVoltar />
            Voltar para lista de serviços
          </Button>
        </ContainerBtn>
      </Container>
    );
  }
}
