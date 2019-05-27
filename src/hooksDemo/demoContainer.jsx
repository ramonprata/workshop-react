import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FormWithHooks from './formWithHooks';
import FormWithNoHooks from './formWithNoHooks';

class DemoContainer extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" style={{ flexGrow: 1, padding: '10vw' }}>
        <Grid container item direction="row" justify="space-around">
          <FormWithNoHooks />
          <FormWithHooks />
        </Grid>
      </Grid>
    );
  }
}

export default DemoContainer;
