// Estilo do contratar serviço
import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

import { BsSearch } from "react-icons/bs";

export const ContainerGeneral = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  gap: 20px;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
export const ContainerFiltros = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  padding: 40px 20px 0;
  gap: 20px;

  input {
    border-radius: 10px;
    border: none;
    padding: 10px;
    outline: none;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }

  select {
    border-radius: 10px;
    border: none;
    outline: 0;
    text-align: center;
    padding: 10px;
    outline: none;

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const FiltrosValores = styled.div`
  display: flex;
  gap: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > label {
    font-size: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ContainerBusca = styled.div`
  position: relative;
  width: 40%;
  margin-right: auto;

  > input {
    border-radius: 10px;
    padding: 10px 10px 10px 36px;
    border: none;
    outline: none;
    width: 100%;
  }

  > svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
export const Lupa = styled(BsSearch)``;

export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const CardList = styled.div`
  background-color: #3f3b3b;
  border-radius: 10px;
  margin: 0 auto;
  color: #fff;
  padding: 30px 20px 20px;

  h4,
  p {
    font-size: 13px;
    margin: 0;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
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
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px;

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

export const Price = styled.span`
  color: #95de8e;
  font-size: 16px;
`;
