import React, { Component } from 'react';
import { Badge, IconButton } from '@material-ui/core/';
import { Favorite } from '@material-ui/icons/';

class IconeFavorite extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.badgeContent !== nextProps.badgeContent;
  }

  render() {
    console.log('render IconeFavorite ');
    return (
      <IconButton color="inherit" onClick={() => this.props.goTo('wishlist')}>
        <Badge badgeContent={this.props.badgeContent} color="secondary">
          <Favorite />
          {/* <Link to="/wishlist"><ShoppingCart /></Link> */}
        </Badge>
      </IconButton>
    );
  }
}

export default IconeFavorite;
