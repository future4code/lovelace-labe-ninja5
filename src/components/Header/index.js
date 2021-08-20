import React, { Component } from "react";

import Logo from "../../imagens/logo-ninja.png";

import { Cabecalho, BoxLogo, NomeSite, Button, Carrinho } from "./estilo";

export default class Header extends Component {
  render() {
    return (
      <Cabecalho>
        <BoxLogo onClick={() => this.props.trocarTela("inicial")}>
          <img src={Logo} />
          <NomeSite>LabeNinjas</NomeSite>
        </BoxLogo>

        <Button onClick={() => this.props.trocarTela("carrinho")}>
          <Carrinho />
        </Button>
      </Cabecalho>
    );
  }
}
