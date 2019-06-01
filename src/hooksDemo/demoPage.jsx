import React, { useState } from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import FormWithHooks from './formWithHooks';
import FormWithNoHooks from './formWithNoHooks';

const DemoPage = () => {
  const [formSelecionado, setFormSelecionado] = useState('ambos');

  function handleFormChange(e) {
    setFormSelecionado(e.target.value);
  }

  return (
    <Grid container direction="column" justify="space-between" style={{ padding: '10vw' }}>
      <Grid container direction="column" alignItems="center">
        <RadioGroup
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            minWidth: 500
          }}
          aria-label="Forms"
          name="radioforms"
          value={formSelecionado}
          onChange={handleFormChange}
        >
          <FormControlLabel
            value="hooks"
            control={<Radio />}
            label="Com Hooks"
            className="radioInline"
          />
          <FormControlLabel
            value="noHooks"
            control={<Radio />}
            label="Sem hooks"
            className="radioInline"
          />
          <FormControlLabel
            value="ambos"
            control={<Radio />}
            label="Ambos"
            className="radioInline"
          />
        </RadioGroup>
      </Grid>
      <Grid container item direction="row" justify="space-evenly">
        {(formSelecionado === 'noHooks' || formSelecionado === 'ambos') && <FormWithNoHooks />}
        {(formSelecionado === 'hooks' || formSelecionado === 'ambos') && <FormWithHooks />}
      </Grid>
    </Grid>
  );
};

export default DemoPage;
