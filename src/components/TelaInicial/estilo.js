import styled from "styled-components";

// Estilo da Tela Inicial

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Rammetto One", cursive;
  margin: 30px 0;
`;

export const Button = styled.button`
  padding: 20px 40px;
  background: #d73743;
  border-radius: 10px;
  font-family: "Revalia", cursive;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms ease;

  &:hover {
    background-color: #d73743a6;
  }

  & + & {
    margin-left: 80px;

    @media screen and (max-width: 576px) {
      margin: 0;
      margin-top: 30px;
    }
  }
`;

export const ShurikenIcone = styled.img`
  width: 30px;
  height: 27px;
  margin-left: 10px;
`;

export const SloganBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;

  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`;

export const Imagem = styled.img`
  height: 250px;

  @media screen and (max-width: 576px) {
    height: 150px;
  }
`;
export const Titulo = styled.h1`
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  font-size: 50px;
  margin-bottom: 0;
  line-height: 0;

  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`;

export const Slogan = styled.p`
  margin-top: 40px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const ButtonBox = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
