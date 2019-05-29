import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
const WidthWindow = ({ width }) => {
  return useMemo(() => {
    console.log('render');
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <label htmlFor="">Width window:</label>
        <h3 style={{ padding: '0 10px' }}>{width}</h3>
      </Grid>
    );
  }, [width]);
};

// const WidthWindow = ({ width }) => {
//   console.log('render');
//   return (
//     <Grid container direction="row" justify="flex-start" alignItems="center">
//       <label htmlFor="">Width window:</label>
//       <h3 style={{ padding: '0 10px' }}>{width}</h3>
//     </Grid>
//   );
// };

export default WidthWindow;
