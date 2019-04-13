import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import styles from './style';
import Welcome from './welcome';
import meuEstilo from './meuEstilo.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    /**
     * No lifecycle de construção de um componente
     * o construtor é o primeiro a ser executado
     * é um bom lugar para um setup inicial do componente
     * como inicializar o state por exemplo
     */
    console.log('Lifecycle de criação - Construtor App');
    this.state = {
      comment: 'Blabla',
      count: 0,
      mostraWelcome: false,
      outraProp: ''
    };
    setTimeout(() => {
      this.setState({
        outraProp: 'Outra prop alterada'
      });
    }, 5000);
  }

  /**
   *  React < 16.3
   * O componentWillMount é executado logo depois do construtor
   * Ele foi deprecado por não fazer sentido seu uso e em muitos casos
   * utilizado de forma errada
   */
  componentWillMount() {
    console.log('Lifecycle de criação - componentWillMount App');
  }

  /**
   * O componentDidMount foi mantido nas versões >= 16.3
   * esse é muito utilizado por exemplo para fazer chamadas a API's
   * só faz sentido chamar um setState() aqui se for após a conclusão
   * de uma operação assíncrona
   * Ele é executado depois do render
   */
  componentDidMount() {
    console.log('Lifecycle de criação - componentDidMount App');
  }

  /**
   * Este é executado sempre que o comoponente
   * será "desmontado" da tela.
   * Útil para resetar coisas, excluir listeners, etc
   */
  componentWillUnmount() {
    console.log('Lifecycle de desmontar - componentWillUnmount App');
  }

  minhaFuncao = () => {
    console.log('Esse código depois que atualizar o state');
  };

  atualizaMeuState = () => {
    // ERRAdo: Não atualize o state dessa forma
    this.state.comment = 'Cometário alterado';

    // Atualização de state da forma correta
    // quando seu estado atual não depende do estado anterior
    this.setState({
      comment: 'Cometário alterado'
    });

    setInterval(() => {
      // Atualização de state da forma correta
      // quando seu estado atual depende do estado anterio
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

  /**
   * Uma forma de fazer renderização condicional
   * cria uma função que verifica se deve ou não retornar
   * um componente com base em uma condição.
   * Chame essa função no render().
   */
  renderWelcomeCondicional = () => {
    return this.state.mostraWelcome ? <Welcome /> : null;
  };

  renderWelcome = () => {
    return (
      <Welcome
        outraProp={this.state.outraProp}
        devoMostrar={this.state.mostraWelcome}
        mostraComentario={this.mostraComentario}
      />
    );
  };

  mostraComentario = () => {
    this.setState({
      mostraComentario: true
    });
  };

  /**
   * O render é executado tanto no Lifecycle
   * de criação quanto de atualização
   */
  render() {
    console.log('Lifecycle de criação/atualização - render App');
    return (
      <div className="App">
        <header className={meuEstilo.Appheader}>
          {this.state.mostraComentario && <p>{this.state.comment}</p>}
          <div style={styles.padding}>
            <button onClick={this.mostraWelcome}>Mostra welcome</button>
          </div>
          <div style={styles.padding}>
            <button onClick={this.atualizaMeuState}>Start counter</button>
          </div>
          <h1>{this.state.count}</h1>
          {this.renderWelcome()}

          {/* chamada de uma renderização condicional
          {this.renderWelcomeCondicional()} */}

          {/* forma inline de fazer renderização condicional
          {this.state.mostraWelcome && <Welcome />} */}
        </header>
      </div>
    );
  }
}

var styles = {
  main: {
    height: 100,
    width: 200,
    backgroundColor: 'white',
    color: '#282c34',
    marginBottom: 2
  },
  padding: {
    padding: '10px 0'
  }
};

export default App;
