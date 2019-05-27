import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core/';

const BookStoreAppBar = props => {
  const goTo = path => {
    props.history.push({
      pathname: path,
      data: { idUsuario: 1, teste: 'bla' }
    });
  };

  const { classes } = props;
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
              xs={6}
              md={6}
              sm={6}
              lg={6}
              className={classes.logoContainer}
              onClick={() => props.history.replace('/')}
            >
              <Typography variant="h6">React hooks</Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              alignItems="center"
              xs={6}
              sm={6}
              md={6}
              lg={6}
              justify="space-between"
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

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

export const mapStateToProps = state => {
  return {};
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(BookStoreAppBar);
