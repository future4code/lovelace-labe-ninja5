import React, { Component } from "react";

import {
  Container,
  Titulo,
  ItemTitulo,
  Preco,
  BoxCards,
  Lixeira,
  Button,
  BtnContratar,
  TotaleBtn,
  Total,
  BtnVoltar,
  IconeVoltar,
} from "./estilo";

export default class Carrinho extends Component {
  state = {
    estaContratado: false,
  };

  handleBtnContratar = () => {
    this.setState({ estaContratado: true });
    this.props.limparCarrinho();
  };

  render() {
    const totalCarrinho = this.props.carrinho.reduce((total, itemAtual) => {
      return total + itemAtual.price;
    }, 0);

    return (
      <BoxCards>
        <Titulo>Serviços adicionados</Titulo>

        {this.props.carrinho.length === 0 ? (
          <p>O seu carrinho está vazio</p>
        ) : (
          <>
            {this.props.carrinho.map((item) => {
              return (
                <Container key={item.id}>
                  <ItemTitulo>{item.title}</ItemTitulo>
                  <div>
                    <Preco>R${item.price}</Preco>
                    <Button onClick={() => this.props.deletarItem(item.id)}>
                      <Lixeira />
                    </Button>
                  </div>
                </Container>
              );
            })}
            <TotaleBtn>
              <Total>Total: R$ {totalCarrinho}</Total>
              <BtnContratar
                onClick={this.handleBtnContratar}
                disabled={this.state.estaContratado}
              >
                {this.state.estaContratado ? "Contratado" : "Contratar"}
              </BtnContratar>
            </TotaleBtn>
            <BtnVoltar onClick={() => this.props.trocarTela("lista")}>
              <IconeVoltar />
              Voltar para lista de serviços
            </BtnVoltar>
          </>
        )}
      </BoxCards>
    );
  }
}
