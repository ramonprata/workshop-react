import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import * as shoppingCartOperations from './redux/shoppingCartOperations';
class ShoppingCartPage extends Component {
  render() {
    return (
      <div>
        <h1>ShoppingCartPage</h1>
        <Button variant="contained" color="primary" onClick={() => this.props.efetuarCompra(true)}>
          Comprar
        </Button>
        <div>{`Compra efetuada: ${this.props.compraEfetuada}`}</div>
      </div>
    );
  }
}

const mapStateToProps = ({shoppingCart}) => {
  return {
    compraEfetuada: shoppingCart.compraEfetuada
  };
};

const mapDispatchToProps = {
  efetuarCompra: shoppingCartOperations.efetuarCompra
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartPage);
