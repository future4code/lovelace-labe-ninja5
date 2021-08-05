import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillTrashFill, BsFillReplyFill } from "react-icons/bs";


export const ConteinerList = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%
`
export const AddCarrinho = styled(MdAddShoppingCart)`
font-size: 28px;
transition: transform 200ms ease;
color: #fff;

@media screen and (max-width: 576px) {
  font-size: 20px;
}
`;



export const Price = styled.span`
color: #95de8e;
font-size: 16px;
`;
export const Button = styled.button`
  padding: 20px 80px;
  background-color: #d73743;
  border-radius: 10px;
  font-family: "Revalia", cursive;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms ease;
  display: flex;
  align-items: center;
  margin: 20px 0;
 

  &:hover {
    background-color: #d73743a6;
  }

  &:disabled{
      background-color: #8f8d8d;
      cursor: default;
  }

  @media screen and (max-width: 576px) {
    padding: 10px 40px;
  }
`;

export const IconeVoltar = styled(BsFillReplyFill)`
  color: #fff;
  font-size: 28px;
  margin: 0 10px;
`;



// Estilo do detalhe do serviço

