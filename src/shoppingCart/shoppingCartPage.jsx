import React, { Component } from 'react';
import { connect } from 'react-redux';
class ShoppingCartPage extends Component {
  render() {
    return (
      <div>
        <h1>ShoppingCartPage</h1>
        <p>{`O nome dela é.. ${this.props.nome}`}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { nome: state.reducerNome.nome };
};
export default connect(mapStateToProps)(ShoppingCartPage);
