import React, { Component } from "react";

import Logo from "../../imagens/logo-ninja.png";

import {
  Container,
  Button,
  Titulo,
  Slogan,
  ShurikenIcone,
  SloganBox,
  Imagem,
  ButtonBox,
} from "./estilo";

import Shuriken from "../../imagens/shuriken.png";

export default class TelaInicial extends Component {
  render() {
    return (
      <Container>
        <Imagem src={Logo} />
        <SloganBox>
          <Titulo>LabeNinjas</Titulo>
          <div>
            <Slogan>
              O melhor serviço, na velocidade de um ninja
              <ShurikenIcone src={Shuriken} />
            </Slogan>
          </div>
        </SloganBox>
        <ButtonBox>
          <Button onClick={() => this.props.trocarTela("cadastrar")}>
            Quero ser um ninja
          </Button>
          <Button onClick={() => this.props.trocarTela("lista")}>
            Contratar serviço
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}
