import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import './demo.css';
import BotaoSalvar from './botaoSalvar';
import DemoService from './service';

class FormWithNoHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
      loading: false
    };
  }

  async componentDidMount() {
    const { nome, sobreNome } = await DemoService.getUsuario();
    this.setTitleDocument(nome);
    this.setState({
      nome,
      sobreNome
    });
  }

  componentDidUpdate() {
    // this.setTitleDocument(this.state.nome);
  }

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

  onSave = async () => {
    this.setState({
      loading: true
    });
    await DemoService.salvar(this.state);
    this.resetState();
  };

  render() {
    const { nome, sobreNome, loading } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Form with no hooks" />
        <CardContent>
          <Input label="Nome" value={nome} onChange={this.handleNomeChange} />
          <Input label="Sobrenome" value={sobreNome} onChange={this.handleSobrenomeChange} />
          <BotaoSalvar onSave={this.onSave} loading={loading} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
