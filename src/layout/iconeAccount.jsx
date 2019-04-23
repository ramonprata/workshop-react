import React, { Component } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons/';

class IconeAccount extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {

  }

  render() {
    const open = false;
    return (
      <div>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default IconeAccount;
