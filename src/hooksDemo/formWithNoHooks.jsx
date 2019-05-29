import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import './demo.css';
import BotaoSalvar from './botaoSalvar';
import DemoService from './service';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWidthResize);
    this.setTitleDocument(this.state.nome);
  }

  componentDidUpdate() {
    this.setTitleDocument(this.state.nome);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidthResize);
  }

  handleWidthResize = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  setTitleDocument = nome => {
    if (document.title !== nome) {
      document.title = nome;
    }
  };

  handleNomeChange = e => {
    this.setState({
      nome: e.target.value
    });
  };

  handleSobrenomeChange = e => {
    this.setState({
      sobreNome: e.target.value
    });
  };

  resetState = () => {
    this.setState({
      nome: '',
      sobreNome: '',
      loading: false
    });
  };

  render() {
    const { nome, sobreNome, loading } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Form sem hooks" />
        <CardContent>
          <Input label="Nome" value={nome} onChange={this.handleNomeChange} />
          <Input label="Sobrenome" value={sobreNome} onChange={this.handleSobrenomeChange} />
          <WidthWindow width={this.state.width} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
