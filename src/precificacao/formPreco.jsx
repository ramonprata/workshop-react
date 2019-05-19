import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  FormControl,
  InputLabel,
  NativeSelect,
  Input,
  Card,
  TextField
} from '@material-ui/core/';
class FormPreco extends React.Component {
  state = {
    produtoSelecionado: null,
    dataInicio: '2017-05-24',
    valorAtacado: 0,
    valorVarejo: 0
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Card style={{ minWidth: 250, flexGrow: 1, padding: '3% 1%' }}>
          <Grid container justify="row" style={{ flexGrow: 1 }} alignItems="center">
            <Grid container item lg={7} md={7} sm={7} style={{ padding: '0 2%' }}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="Produto">Produto</InputLabel>
                <NativeSelect
                  value={this.state.produtoSelecionado}
                  onChange={() => {}}
                  input={<Input name="Produto" id="age-native-helper" />}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>

            <Grid container item direction="row" justify="space-between" lg={5} md={5} sm={5}>
              <Grid item lg={4} md={4} sm={4} style={{ padding: '0 2%' }}>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    id="dataInicio"
                    label="Data início"
                    type="date"
                    defaultValue={this.state.dataInicio}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
              </Grid>

              <Grid item lg={4} md={4} sm={4} style={{ padding: '0 2%' }}>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    value={this.state.valorVarejo}
                    id="precoVarejo"
                    label="Varejo"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item lg={4} md={4} sm={4} style={{ padding: '0 2%' }}>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    value={this.state.valorAtacado}
                    id="precoAtacado"
                    label="Atacado"
                    type="text"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container style={{ height: 25, padding: '2% 0' }}>
              <Grid container item justify="flex-end" style={{ height: 100 }}>
                <div style={{ padding: '0 25px' }}>Um</div>
                <div style={{ padding: '0 25px' }}>Dois</div>
                <div style={{ padding: '0 25px' }}>Tres</div>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

const styles = {};
export default withStyles(styles)(FormPreco);
