import React from 'react';
import { Grid, Button, CircularProgress } from '@material-ui/core';
const BotaoSalvar = props => {
  return (
    <Grid container direction="row" justify="flex-end" style={{ padding: '10px 0' }}>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        style={{ width: '25%' }}
      >
        <Button onClick={props.onSave} color="primary" variant="outlined">
          {props.loading ? <CircularProgress size={24} /> : 'Salvar'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BotaoSalvar;
