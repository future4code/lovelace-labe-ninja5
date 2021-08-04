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
} from "./estilo";
import { Titulo } from "../../TelaInicial/estilo";

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
  },
};

export default class ListaServico extends Component {
  state = {
    listService: [],
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = async () => {
    try {
      const res = await axios.get(url, headers);
      this.setState({ listService: res.data.jobs });
      console.log(res.data.jobs);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { listService } = this.state;
    const listServices = listService.map((servico, index) => {
      const { id, title, dueDate, price } = servico;
      const estaNoCarrinho = this.props.carrinho.some((item) => item.id === id);

      return (
        <div key={index}>
          <CardList>
            <h4>{title}</h4>
            <p>
              Até {dueDate} por <font color="#95de8e">R$</font>
              {price}
            </p>
            <ContainerButton>
              <Button onClick={() => this.props.trocarTela("detalhes")}>
                <font color="white">Ir para detalhe</font>
              </Button>
              <Button
                onClick={() => this.props.adicionarAoCarrinho(servico)}
                disabled={estaNoCarrinho}
              >
                <AddCarrinho />
              </Button>
            </ContainerButton>
          </CardList>
        </div>
      );
    });

    return (
      <>
        <ContainerBusca>
          <input placeholder="Busca" type="text" />
        </ContainerBusca>
        <ContainerFiltros>
          <div>
            <p>Ordenar Por:</p>
            <select>
              <option>Título</option>
              <option>Prazo</option>
              <option>Preço Crescente</option>
              <option>Preço Decrescente</option>
            </select>
          </div>
          <div>
            <p> Valor míninmo: </p>
            <input
              name={"valorMinimo"}
              type="number"
              // onChange={}
              // value={}
            />
          </div>
          <div>
            <p>Valor máximo:</p>
            <input
              name={"valorMaximo"}
              type="number"
              // onChange={}
              // value={}
            />
          </div>
        </ContainerFiltros>
        <ContainerGeneral>{listServices}</ContainerGeneral>
      </>
    );
  }
}
