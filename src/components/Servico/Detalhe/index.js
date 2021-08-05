import React, { Component } from "react";
import Axios from "axios";

const url = "https://labeninjas.herokuapp.com/"

const headers = {
  headers: {
    Authorization: "553d7058-9437-416b-b020-7eaaa0867ceb"
  }
}


export default class DetalheServico extends Component {

  state ={
    servico: {},
    listaPagamentos: []
  }

  componentDidMount() {
    this.getJobById()
  }

  getJobById = () => {
    Axios.get(`${url}jobs/${this.props.id}`, headers)
      .then(res => {
        this.setState({ servico: res.data, listaPagamentos: res.data.paymentMethods })
      }).catch(err => {
        console.log(err.response)
      })
  }

  render() {

    const listaPagamentos = this.state.listaPagamentos.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    

    return (
      <div>
        <h1>{this.state.servico.title}</h1>
        <p>{this.state.servico.description}</p>
        <p>Formas de Pagamento: </p>
        <ul>
          {listaPagamentos}
        </ul>


        <button onClick={() => this.props.trocarTela("lista")}>
          Ir para lista
        </button>
      </div>
    );
  }
}
