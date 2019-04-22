import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

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
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header>
              <BookStoreAppBar />
            </header>
            <div className="content">
              <Switch>
                <Route exact path="/" component={BookStorePage} />
                <Route exact path="/shopping-cart" component={ShoppingCartPage} />
                <Route exact path="/wishlist" component={WishListPage} />
                <Route path="/(\w+)" component={BookStorePage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
