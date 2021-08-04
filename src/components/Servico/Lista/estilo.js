// Estilo do contratar serviço
import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

export const ContainerGeneral = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 25px;
  gap: 20px;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CardList = styled.div`
  height: 168px;
  background-color: #3f3b3b;
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px;

  h4,
  p {
    margin-top: 0px;
    color: white;
    font-size: 13px;
    padding: 10px;
  }
`;

export const AddCarrinho = styled(MdAddShoppingCart)`
  font-size: 28px;
  transition: transform 200ms ease;
  color: #fff;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 30px;

  &:hover ${AddCarrinho} {
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover ${AddCarrinho} {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;
