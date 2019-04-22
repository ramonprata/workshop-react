import React from 'react';
import { connect  } from 'react-redux';
import { compose } from 'redux';
import { setNome } from '../layout/layoutActions';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Typography, Grid, IconButton } from '@material-ui/core/';
import { ShoppingCart, Favorite, AccountCircle } from '@material-ui/icons/';

class BookStoreAppBar extends React.Component {

  componentDidMount() {
    console.log('this.props :', this.props);

    setTimeout(() => {
      this.props.setNome('Jenifer');
      console.log('this.props.nome :', this.props.nome);
    }, 5000);

  }
  
  /**
   * Navega para o path e passa data como parametro
   */
  goTo = path => {
    this.props.history.push({
      pathname: path,
      data: { idUsuario: 1, teste: 'bla' }
    });
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
                <Typography variant='h6'>Books</Typography>
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
                <IconButton color="inherit" onClick={() => this.goTo('shopping-cart')}>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                    {/* <Link to="/shopping-cart"><ShoppingCart /></Link> */}
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={() => this.goTo('wishlist')}>
                  <Badge badgeContent={4} color="secondary">
                    <Favorite />
                    {/* <Link to="/wishlist"><ShoppingCart /></Link> */}
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
  logoContainer: {
    cursor: 'pointer'
  },
  img: {
    height: 50,
    width: 50
  }
};




export const mapStateToProps = (state) => {
  return {
    nome: state.reducerNome.nome
  };
};


const mapDispatchToProps = {
  setNome
};

// export default connect(mapStateToProps)(BookStoreAppBar);

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookStoreAppBar);

