import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BookCard from './bookCard';
import { booksMock } from '../booksMock';

class BookStorePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.booksContainer}>
          <Grid container justify="center" spacing={24}>
            {booksMock.items.map(book => (
              <Grid key={book.volumeInfo.title} item>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    padding: '0 10%'
  },
  booksContainer: {
    paddingTop: '5%'
  }
};
export default withStyles(styles)(BookStorePage);
