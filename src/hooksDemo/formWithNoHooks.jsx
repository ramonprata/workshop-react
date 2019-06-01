import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './input';
import './demo.css';
import WidthWindow from './widthWindow';

class FormWithNoHooks extends Component {
  state = {
    nome: 'Ramon',
    sobreNome: '',
    width: window.innerWidth
  };

  setDocumentTitle = () => {
    document.title = this.state.nome;
  };

  componentDidMount() {
    this.setDocumentTitle();
    window.addEventListener('resize', this.handleReziseWidth);
  }

  componentDidUpdate(prevProps, prevState) {
    this.setDocumentTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleReziseWidth);
  }

  handleReziseWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  handleNomeChange = e => {
    this.setState({
      nome: e.target.value
    });
  };

  handleSobreNomeChange = e => {
    this.setState({
      sobreNome: e.target.value
    });
  };

  render() {
    const { nome, sobreNome, width } = this.state;
    return (
      <Card className="card">
        <CardHeader title="Form sem hooks" />
        <CardContent>
          <Input label="Nome" value={nome} onChange={this.handleNomeChange} />
          <Input label="Sobrenome" value={sobreNome} onChange={this.handleSobreNomeChange} />
          <WidthWindow width={width} />
        </CardContent>
      </Card>
    );
  }
}

export default FormWithNoHooks;
