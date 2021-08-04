// Estilo do cadastrar serviço
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  form {
    margin-top: 50px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    > input,
    select {
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;
      border: none;
      box-shadow: 0 0 3px 1px;
    }
  }

  @media screen and (max-width: 576px) {
    max-width: 85%;
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  padding: 20px 40px;
  background: #d73743;
  border-radius: 10px;
  font-family: "Revalia", cursive;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms ease;

  &:hover {
    background-color: #d73743a6;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ContainerSelect = styled.div`
  margin-top: 10px;

  &:first-child {
    border-radius: 10px;
    box-shadow: 0 0 3px 1px;
    font-size: 0.8rem;
  }
`;
