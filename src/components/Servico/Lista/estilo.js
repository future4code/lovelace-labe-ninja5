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
export const ContainerFiltros = styled.div`
    grid-column: 1/span4;
    display:flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
    gap:0 10px;
    text-align:center ;

   input{
     border-radius: 10px;
     width:350px;
     height:50px;
     border:none;
     
   }

   select{
    border-radius: 10px;
     width:100px;
     height:50px;
     border:none;
     outline: 0;
     background-color: #3F3B3B;
     color:white;
     text-align: center;
   }

` 

export const ContainerBusca = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 15px;

    >input{
      border-radius: 10px;
      width: 500px;
      height:50px ;
      border: none;
    }
   


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