import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import styles from './style';
import Welcome from './welcome';
import meuEstilo from './meuEstilo.module.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  mostraTexto = () => {
    console.log('Meu texto');
  };

  render() {
    return (
      <div className="App">
        <header className={meuEstilo.Appheader}>
          <div style={styles}>
            <p>Div com estilo como objeto js</p>
          </div>
          <img src={logo} className="App-logo" alt="logo" style={{height: 150, width: 150}} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Welcome
            mostraTexto={this.mostraTexto}
            person={{
              name: 'Ramon',
              age: 25
            }}
          >
            <div>bla bla</div>
          </Welcome>
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
