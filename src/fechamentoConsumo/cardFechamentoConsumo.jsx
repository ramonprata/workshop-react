import React, { Component } from 'react';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {
  getinlineStyleMarcador,
  getInlineStyleFaixas,
  TAMANHO_MARCADOR
} from './fechamentoConsumoUtils';
import LabelValorReal from './labelValorReal';

const propsMock = {
  valorTotal: 300,
  valorReal: 175,
  faixaAceite: 30
};
class CardFechamentoConsumo extends Component {
  state = {
    posicaoMarcadorReal: -TAMANHO_MARCADOR / 4,
    exibeValorReal: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setPosicaoMarcador();
    }, 3000);
  }

  setPosicaoMarcador = () => {
    const { theme } = this.props;
    const duracaoTransicao = theme.transitions.duration.standard;
    const delayParaExibirLabel = 50; // em ms
    const porcentagemMarcadorReal =
      (propsMock.valorReal / propsMock.valorTotal) * 100 - TAMANHO_MARCADOR / 4;
    this.setState(
      {
        posicaoMarcadorReal: porcentagemMarcadorReal
      },
      () => {
        setTimeout(() => {
          this.setState({
            exibeValorReal: true
          });
        }, duracaoTransicao + delayParaExibirLabel);
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { faixaIdeal, faixasInadequadas } = getInlineStyleFaixas(propsMock);
    const inlineStyleMarcador = getinlineStyleMarcador(this.props, this.state.posicaoMarcadorReal);
    return (
      <Card className={classes.card}>
        <CardHeader title="Formula X" component="h6" className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          <Grid container className={classes.rangeContainer}>
            <Grid container item direction="row" justify="center">
              <div className={classes.marcadorReferencia}>
                <Icon color="primary">check_circle</Icon>
                <div className={classes.linhaMarcadorReferencia} />
              </div>
            </Grid>
            <Icon style={inlineStyleMarcador}>arrow_drop_down</Icon>
            <Grid container direction="row" style={{ zIndex: 1 }}>
              <div style={faixasInadequadas} className={classes.range} />
              <div style={faixaIdeal} className={classes.range} />
              <div style={faixasInadequadas} className={classes.range} />
            </Grid>
          </Grid>
          <LabelValorReal
            inlineStyleMarcador={inlineStyleMarcador}
            valorReal={propsMock.valorReal}
            exibeValorReal={this.state.exibeValorReal}
          />
        </CardContent>
      </Card>
    );
  }
}

const tamanhoGraficoRange = 200;
const styles = theme => {
  return {
    card: {
      padding: 10
    },
    cardHeader: {
      padding: 0
    },
    cardContent: {
      minHeght: 280
    },
    rangeContainer: {
      width: tamanhoGraficoRange
    },
    marcadorReferencia: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: -10
    },
    linhaMarcadorReferencia: {
      width: 2,
      height: 50,
      backgroundColor: theme.palette.common.black,
      marginBottom: -10,
      zIndex: 0
    },
    range: {
      height: 8
    }
  };
};
export default withTheme()(withStyles(styles)(CardFechamentoConsumo));
