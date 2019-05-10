const INITIAL_STATE = {
  listaDesejos: [],
  itensCarrinho: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCLUI_LISTA_DESEJOS':
      return { ...state, listaDesejos: [...state.listaDesejos, action.payload] };

    case 'INCLUI_NO_CARRINHO':
      return { ...state, itensCarrinho: [...state.itensCarrinho, action.payload] };

    default:
      return state;
  }
};
