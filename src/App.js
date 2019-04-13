import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import styles from './style';
import Welcome from './welcome';
import meuEstilo from './meuEstilo.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Blabla',
      count: 0,
      mostraWelcome: false,
      outraProp: ''
    };

    console.log('Construtor App');
    setTimeout(() => {
      this.setState({
        outraProp: 'Outra prop alterada'
      })
    }, 5000);
  }

  minhaFuncao = () => {
    console.log('Esse código depois que atualizar o state');
  };
  atualizaMeuState = () => {
    // ERRAAAADOOOOOO
    this.state.comment = 'Cometário alterado';
    // this.setState({
    //   comment: 'Cometário alterado',
    //   count: (this.state.count += 1)
    // });
    setInterval(() => {
      this.setState(prevState => {
        return {
          count: (prevState.count += 1)
        };
      });
    }, 1000);
  };

  mostraWelcome = () => {
    this.setState({
      mostraWelcome: true
    });
  };

  // renderWelcome = () => {
  //   return this.state.mostraWelcome ? <Welcome /> : null;
  // };

  renderWelcome = () => {
    return (
      <Welcome 
      outraProp={this.state.outraProp}
      devoMostrar={this.state.mostraWelcome} 
      mostraComentario={this.mostraComentario} />
    );
  };

  mostraComentario = () => {
    this.setState({
      mostraComentario: true
    });
  };

  
  componentWillMount() {
    console.log('componentWillMount App');
  }

  componentDidMount() {
    console.log('componentDidMount App');
  }
  
  render() {
    console.log('render App');
    return (
      <div className="App">
        <header className={meuEstilo.Appheader}>
          {this.state.mostraComentario && <p>{this.state.comment}</p>}
          <button onClick={this.mostraWelcome}>Mostra welcome</button>
          {/* <button onClick={this.atualizaMeuState}>Start</button> */}
          <h1>{this.state.count}</h1>
          {this.renderWelcome()}
        </header>
      </div>
    );
  }
}

var styles = {
  height: 100,
  width: 200,
  backgroundColor: 'white',
  color: '#282c34',
  marginBottom: 2
};

export default App;
