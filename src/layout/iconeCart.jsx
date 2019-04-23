import React, { Component, useEffect } from 'react';
import { Badge, IconButton } from '@material-ui/core/';
import { ShoppingCart } from '@material-ui/icons/';

class IconeCart extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.badgeContent !== nextProps.badgeContent
  }
  
  render() {
    console.log('render IconeCart ');
    return (
      <IconButton color="inherit" onClick={() => this.props.goTo('shopping-cart')}>
        <Badge badgeContent={this.props.badgeContent} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    );
  }
}

export default IconeCart;
