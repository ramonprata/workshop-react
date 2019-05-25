import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import { BookStoreAppBar } from './layout';
import CardFechamentoConsumo from './fechamentoConsumo/cardFechamentoConsumo';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header>
              <BookStoreAppBar />
            </header>
            <div className="content">
              <Switch>
                <Route exact path="/" component={CardFechamentoConsumo} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
