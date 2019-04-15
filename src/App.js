import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BookStoreAppBar } from './layout';
import { BookStorePage } from './bookStore';
import { ShoppingCartPage } from './shoppingCart';
import { WishListPage } from './wishList';
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
              <Route exact path="/shopping-cart" component={ShoppingCartPage} />
              <Route exact path="/wishlist/" component={WishListPage} />
              <Route path="/(\w+)" component={BookStorePage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
