import { combineReducers } from 'redux';
import { layoutActions } from '../layout';
import bookStoreReducer from '../booksStore/bookStoreReducer';
import shoppingCartReducer from '../shoppingCart/shoppingCartReducer';

const reducer = combineReducers({
  bookStoreReducer,
  shoppingCart: shoppingCartReducer
});

export default reducer;
