// Estilo do contratar serviço
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const ContainerGeneral = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: repeat(4, 1fr);
    padding: 25px;
    gap: 20px;
`

export const ContainerButton = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const CardList = styled.div`
    /* width: 275px; */
    height: 168px;
    background-color: #3F3B3B;
    border-radius: 10px;
    margin: 0 auto;
    padding: 15px;

    h4,p{
        margin-top: 0px;
        color: white;
        font-size: 13px;
        padding: 10px;
    }
`

export const Carrinho = styled(FaShoppingCart)`
  font-size: 28px;
  transition: transform 200ms ease;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 30px;

  &:hover ${Carrinho} {
    transform: scale(1.2);
  }

  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`