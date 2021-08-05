import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  AddCarrinho,
  CardList,
  ContainerGeneral,
  ContainerButton,
  ContainerFiltros,
  ContainerBusca,
  Form,
  Lupa,
  Price,
  FiltrosValores,
} from "./estilo";

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "553d7058-9437-416b-b020-7eaaa0867ceb",
  },
};

export default class ListaServico extends Component {
  state = {
    listService: [],
    estaCarregando: true,
    ordenacao: "titulo",
    valorMin: 0,
    valorMax: 10000,
    inputBusca: "",
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = async () => {
    try {
      const res = await axios.get(url, headers);
      this.setState({ listService: res.data.jobs, estaCarregando: false });
    } catch (err) {
      console.log(err);
    }
  };

  onChangeOrdenação = (e) => {
    this.setState({ ordenacao: e.target.value });
  };

  onChangeValorMin = (e) => {
    this.setState({ valorMin: e.target.value });
  };

  onChangeValorMax = (e) => {
    this.setState({ valorMax: e.target.value });
  };

  onChangeBusca = (e) => {
    this.setState({ inputBusca: e.target.value });
  };

  render() {
    const listaOredenada = this.state.listService.sort((a, b) => {
      switch (this.state.ordenacao) {
        case "titulo":
          return a.title.localeCompare(b.title);
        case "preco crescente":
          return a.price - b.price;
        case "preco decrescente":
          return b.price - a.price;
        case "prazo":
          a = a.dueDate.split("/").reverse().join();
          b = b.dueDate.split("/").reverse().join();
          return a.localeCompare(b);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    const listaFiltrada = listaOredenada
      .filter((servico) => {
        if (servico.price >= this.state.valorMin) {
          return true;
        } else {
          return false;
        }
      })
      .filter((servico) => {
        if (servico.price <= this.state.valorMax) {
          return true;
        } else {
          return false;
        }
      })
      .filter((servico) => {
        if (this.state.inputBusca) {
          if (
            servico.title
              .toLowerCase()
              .includes(this.state.inputBusca.toLocaleLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });

    const listServices = listaFiltrada.map((servico, index) => {
      const { id, title, dueDate, price } = servico;
      const estaNoCarrinho = this.props.carrinho.some((item) => item.id === id);
      const data = new Date(dueDate);
      const dataFormatada = data.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });

      return (
        <CardList key={index}>
          <h4>{title}</h4>
          <p>
            Até {dataFormatada} por <Price>R$ {price}</Price>
          </p>
          <ContainerButton>
            <Button
              onClick={() => this.props.trocarTela("detalhes", servico.id)}
            >
              Ver mais
            </Button>
            <Button
              onClick={() => this.props.adicionarAoCarrinho(servico)}
              disabled={estaNoCarrinho}
            >
              <AddCarrinho />
            </Button>
          </ContainerButton>
        </CardList>
      );
    });

    return (
      <>
        <ContainerFiltros>
          <ContainerBusca>
            <Lupa />
            <input
              placeholder="Busca"
              type="text"
              value={this.state.inputBusca}
              onChange={this.onChangeBusca}
            />
          </ContainerBusca>

          <Form>
            <label>Ordenar:</label>
            <select onChange={this.onChangeOrdenação}>
              <option value="titulo">Título</option>
              <option value="prazo">Prazo</option>
              <option value="preco crescente">Preço Crescente</option>
              <option value="preco decrescente">Preço Decrescente</option>
            </select>
          </Form>
          <FiltrosValores>
            <Form>
              <label> Valor mínimo: </label>
              <input
                name={"valorMinimo"}
                type="number"
                onChange={this.onChangeValorMin}
                value={this.state.valorMin}
              />
            </Form>
            <Form>
              <label>Valor máximo:</label>
              <input
                name={"valorMaximo"}
                type="number"
                onChange={this.onChangeValorMax}
                value={this.state.valorMax}
              />
            </Form>
          </FiltrosValores>
        </ContainerFiltros>

        <ContainerGeneral>
          {this.state.estaCarregando ? (
            <p>Carregando serviços...</p>
          ) : (
            listServices
          )}
        </ContainerGeneral>
      </>
    );
  }
}
