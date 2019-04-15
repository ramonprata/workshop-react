import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Typography, Grid, IconButton } from '@material-ui/core/';
import { ShoppingCart, Favorite, AccountCircle } from '@material-ui/icons/';

class BookStoreAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <Grid container item direction="row" alignItems="center" xs={3} md={3} sm={6} xs={6}>
                <img src={logo} alt="Logo" className={classes.img} />
                <Typography variant="h6" color="inherit">
                  Books
                </Typography>
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
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <Favorite />
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

BookStoreAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    flexGrow: 1
  },
  img: {
    height: 50,
    width: 50
  }
};

export default withStyles(styles)(BookStoreAppBar);
