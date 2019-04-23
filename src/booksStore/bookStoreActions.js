export const incluiNoCarrinho = book => {
  return {
    type: 'INCLUI_NO_CARRINHO',
    payload: book
  };
};

export const incluiNalistaDesejos = book => {
  return {
    type: 'INCLUI_LISTA_DESEJOS',
    payload: book
  };
};
