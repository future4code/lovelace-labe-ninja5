import React, { Component } from "react";

import { Container, Titulo, ItemTitulo, Preco, BoxCards } from "./estilo";

export default class Carrinho extends Component {
  render() {
    return (
      <BoxCards>
        <Titulo>Serviços adicionados</Titulo>
        {this.props.carrinho.map((item) => {
          return (
            <Container>
              <ItemTitulo>{item.title}</ItemTitulo>
              <Preco>R${item.price}</Preco>
              <button>X</button>
            </Container>
          );
        })}
      </BoxCards>
    );
  }
}
