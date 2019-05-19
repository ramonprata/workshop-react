import React from 'react';

const LabelValorReal = props => {
  const { inlineStyleMarcador, valorReal, exibeValorReal } = props;
  return (
    <div
      style={{
        ...inlineStyleMarcador,
        width: 30,
        textAlign: 'center',
        fontSize: 12,
        color: !exibeValorReal ? 'transparent' : 'black'
      }}
    >
      {valorReal}
    </div>
  );
};

export default LabelValorReal;
