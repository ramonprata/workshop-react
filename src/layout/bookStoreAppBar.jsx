import React, { Component } from 'react';
import logo from '../logo.svg';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Typography, Grid, IconButton } from '@material-ui/core';
import { ShoppingCart, Favorite, AccountCircle } from '@material-ui/icons';

class BookStoreAppBar extends Component {
  goTo = path => {
    this.props.history.push({
      pathname: path,
      data: { idUsuario: 1, teste: 'bla' }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div classeName={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <Grid
                container
                item
                direction="row"
                alignItems="center"
                xs={3}
                md={3}
                sm={6}
                lg={3}
                className={classes.logoContainer}
                onClick={() => this.props.history.replace('/')}
              >
                <img src={logo} alt="logo" className={classes.img} />
                <Typography>Books</Typography>
              </Grid>

              <Grid
                container
                item
                direction="row"
                alignItems="center"
                xs={6}
                sm={3}
                md={3}
                lg={2}
                justify="space-between"
              >
                <IconButton color="inherit" onClick={() => this.goTo('shopping')}>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                    {/* 
                    <Link to="shopping">
                      <ShoppingCart />
                    </Link> */}
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={() => this.goTo('wishlist')}>
                  <Badge badgeContent={4} color="secondary">
                    <Favorite />
                    {/* <Link to="wishlists">
                      <Favorite />
                    </Link> */}
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  logoContainer: {
    cursor: 'pointer'
  },
  img: {
    height: 50,
    width: 50
  }
};
export default withRouter(withStyles(styles)(BookStoreAppBar));
