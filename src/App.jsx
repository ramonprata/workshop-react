import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { AppBar } from './layout';
import { DemoPage } from './hooksDemo';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <AppBar />
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={DemoPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
