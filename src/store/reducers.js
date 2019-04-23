import { combineReducers } from 'redux';
import { layoutActions } from '../layout';
import bookStoreReducer from '../booksStore/bookStoreReducer';
const INITIAL_STATE = {
  nome: ''
};

const meuPrimeiroReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case layoutActions.SET_NOME:
      return { ...state, nome: action.payload };

    default:
      return state;
  }
};

const reducer = combineReducers({
  reducerNome: meuPrimeiroReducer,
  bookStoreReducer
});

export default reducer;
