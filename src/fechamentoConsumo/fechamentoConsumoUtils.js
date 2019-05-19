export const TAMANHO_MARCADOR = 30;
export const getinlineStyleMarcador = (props, posicaoMarcadorReal) => {
  const { theme } = props;
  const transicaoMarcador = theme.transitions.easing.easeInOut;
  const duracaoTransicaoMarcador = `${theme.transitions.duration.standard / 1000}s`;
  return {
    fontSize: TAMANHO_MARCADOR,
    position: 'relative',
    left: `${posicaoMarcadorReal.toString()}%`,
    marginBottom: -10,
    transition: transicaoMarcador,
    transitionDuration: duracaoTransicaoMarcador
  };
};

export const getInlineStyleFaixas = (props) => {
  const widthFaixaIdeal = props.faixaAceite * 2;
  const faixaIdeal = {
    backgroundColor: 'green',
    width: `${widthFaixaIdeal.toString()}%`
  };
  const faixasInadequadas = {
    backgroundColor: 'red',
    width: `${((100 - widthFaixaIdeal) / 2).toString()}%`
  };
  return {
    faixaIdeal,
    faixasInadequadas
  };
};
