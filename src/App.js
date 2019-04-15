import React, { Component } from 'react';
import './App.css';
import { BookStoreAppBar } from './layout';
import { BookStorePage } from './bookStore';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header>
          <BookStoreAppBar />
        </header>
        <div className="content">
          <BookStorePage />
        </div>
      </div>
    );
  }
}

export default App;
