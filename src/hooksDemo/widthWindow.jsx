import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
const WidthWindow = ({ width }) => {
  return useMemo(() => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <label htmlFor="">Width window:</label>
        <h3 style={{ padding: '0 10px' }}>{width}</h3>
      </Grid>
    );
  }, [width]);
};

export default WidthWindow;
