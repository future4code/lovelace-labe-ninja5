import React, { Component } from "react"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Swal from "sweetalert2";
import Axios from "axios";
import {
  Container,
  ContainerSelect,
  Button,
  ButtonBox,
} from "./estilo";

const options = [
  { value: 'Cartão de Crédito', label: 'Cartão de Crédito' },
  { value: 'Cartão de Débito', label: 'Cartão de Débito' },
  { value: 'Pix', label: 'Pix' },
  { value: 'Boleto', label: 'Boleto' },
  { value: 'Transferência', label: 'Transferência' }
]

const animatedComponents = makeAnimated()

const url = "https://labeninjas.herokuapp.com/"

const headers = {
  headers: {
    Authorization: "553d7058-9437-416b-b020-7eaaa0867ceb"
  }
}

export default class CadastrarServico extends Component {

  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: 0,
    inputFormaPagamento: [],
    inputPrazo: ""
  }

  selectRef = null
  
  clearValue = () => {
    this.selectRef.select.clearValue();
  }

  atualizaTitulo = (e) => {
    this.setState({ inputTitulo: e.target.value })
  }

  atualizaDescricao = (e) => {
    this.setState({ inputDescricao: e.target.value })
  }

  atualizaPreco = (e) => {
    this.setState({ inputPreco: e.target.value })
  }

  atualizaPagamento = (option) => {
    this.setState({ inputFormaPagamento: option })
  }

  atualizaPrazo = (e) => {
    this.setState({ inputPrazo: e.target.value })
  }

  criaServico = () => {
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputPreco),
      paymentMethods: this.state.inputFormaPagamento.map(objeto => objeto.value),
      dueDate: this.state.inputPrazo
    }

    Axios.post(`${url}jobs`, body, headers)
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000
        })
        this.setState({ inputTitulo: "", inputDescricao: "", inputPreco: 0, inputFormaPagamento: [], inputPrazo: "" })
        this.clearValue()
      }).catch(err => {
        console.log(err.response.data)
        Swal.fire({
          icon: 'error',
          title: 'OOOPS...',
          text: 'Algo deu errado, por favor tente novamente',
          showConfirmButton: true,
          confirmButtonColor: '#D73743'
        })
      })
  }

  render() {

    return (

      <Container>
        <h1>Cadastre seu Serviço</h1>
        <form>
          <label>
            Título*
            <input type="text" name="titulo" value={this.state.inputTitulo} onChange={this.atualizaTitulo} />
          </label>
          <label>
            Descrição*
            <input type="text" name="descricao" value={this.state.inputDescricao} onChange={this.atualizaDescricao} />
          </label>
          <label>
            Preço*
            <input type="number" name="preco" value={this.state.inputPreco} onChange={this.atualizaPreco} />
          </label>
          <label>
            Formas de pagamento*
            <ContainerSelect>
              <Select
                ref={ref => {
                  this.selectRef = ref;
                }}
                onChange={this.atualizaPagamento}
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder="Selecione as formas de pagamento"
                isMulti
                options={options}
                theme={theme => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary25: 'lightblue',
                    primary: 'black',
                  },
                })}
              />
            </ContainerSelect>
          </label>
          <label>
            Prazo*
            <input type="date" name="prazo" value={this.state.inputPrazo} onChange={this.atualizaPrazo} />
          </label>
        </form>
        <ButtonBox>
          <Button onClick={() => this.props.trocarTela('inicial')}>Voltar</Button>
          <Button onClick={this.criaServico}>Cadastrar</Button>
        </ButtonBox>
      </Container>
    )
  }
}