import React, { Component } from "react";
import Axios from "axios";
import {
  Button,
  AddCarrinho,
  IconeVoltar,
  ConteinerList,
  ContainerBtn,
  Container,
  Titulo,
  Descricao,
  Pagamentos,
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
    const listaPagamentos = this.state.listaPagamentos.join(", ");

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
          <Titulo>{this.state.servico.title}</Titulo>
          <Descricao>
            <p>Descrição:</p>
            <p>{this.state.servico.description}</p>
          </Descricao>
          <Pagamentos>
            <p>Formas de Pagamento: </p>
            <p>{listaPagamentos}</p>
          </Pagamentos>
          <p>
            Prazo: Até {dataFormatada} por R${this.state.servico.price}
          </p>
        </ConteinerList>
        <ContainerBtn>
          <Button onClick={() => this.props.trocarTela("lista")}>
            <IconeVoltar />
            Voltar para lista de serviços
          </Button>
          <Button onClick={this.desabilitaBotao} disabled={estaNoCarrinho}>
            <AddCarrinho />
            Adicionar ao carrinho
          </Button>
        </ContainerBtn>
      </Container>
    );
  }
}
