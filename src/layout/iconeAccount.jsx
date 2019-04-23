import React, { Component, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons/';

const IconeAccount = () => {
  // state = {
  //   anchorEl: null
  // };

  const [anchorEl, setOpenMenu] = useState(null);

  const handleMenu = event => {
    // this.setState({ anchorEl: event.currentTarget });
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    // this.setState({ anchorEl: null });
    setOpenMenu(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <IconButton color="inherit" onClick={handleMenu}>
        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  );
};

export default IconeAccount;
