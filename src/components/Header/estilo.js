import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";

// Estilo do Header

export const Cabecalho = styled.header`
  font-family: "Revalia", cursive;
  background-color: #d73743;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const BoxLogo = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-left: 30px;

  > img {
    width: 50px;
    @media screen and (max-width: 576px) {
      width: 35px;
    }
  }

  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`;

export const NomeSite = styled.p`
  color: #fff;
  margin-left: 15px;
  font-size: 20px;
  text-shadow: 1px 1px 2px black;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Carrinho = styled(FaShoppingCart)`
  font-size: 28px;
  transition: transform 200ms ease;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  background-color: #d73743;
  border: none;
  cursor: pointer;
  margin-right: 30px;

  &:hover ${Carrinho} {
    transform: scale(1.2);
  }

  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;
