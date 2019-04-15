import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { BookStoreAppBar } from './layout';
import { WishListPage } from './wishList';
import { ShoppingCartPage } from './shoppingCart';
import { BookStorePage } from './booksStore';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <BookStoreAppBar />
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={BookStorePage} />
              <Route exact path="/shopping" component={ShoppingCartPage} />
              <Route exact path="/wishlist" component={WishListPage} />
              <Route path="/(\w+)" component={BookStorePage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
