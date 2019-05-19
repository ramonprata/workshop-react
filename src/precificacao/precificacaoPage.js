import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
} from '@material-ui/core/';
import SwipeableViews from 'react-swipeable-views';
import FormPreco from './formPreco'


function TabContainer(props) {
  const { children, dir } = props;
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class PrecificacaoPage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid container direction="column" justify="flex-start" className={classes.gridContainer}>
        <Grid container item direction="column" className={classes.pageContent}>
          <Typography component="h6" variant="h6" color="primary">
            Nova alteração de preço
          </Typography>
          <Typography component="p" variant="subtitle1" color="textSecondary">
            Ultima atualização as..
          </Typography>
          <Paper>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Preços" />
              <Tab label="Item Two" />
            </Tabs>
          </Paper>
          <SwipeableViews axis="x" index={this.state.value} onChangeIndex={this.handleChangeIndex}>
            <TabContainer dir="x">
              <FormPreco />
            </TabContainer>
            <TabContainer dir="x">Tab Dois</TabContainer>
          </SwipeableViews>
        </Grid>
      </Grid>
    );
  }
}

var styles = theme => ({
  pageContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  gridContainer: {
    flexGrow: 1,
    padding: '3%'
  }
});

export default withStyles(styles)(PrecificacaoPage);
