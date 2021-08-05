import React, { Component } from "react";

export default class DetalheServico extends Component {

  render() {
    return (
      <div>
        <h1>Serviços adicionados</h1>
        {this.props.carrinhoList.map(({ id, title, price }) => {
          return (
            <div key={id}>
              <h1>{title}</h1>
              <p>R${price}</p>
            </div>
          );
        })}
        <button onClick={() => this.props.trocarTela("lista")}>
          Ir para lista
        </button>
      </div>
    );
  }
}
