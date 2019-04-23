import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import BookCard from './bookCard';
import { getBooks } from './booksStoreService';

class BookStorePage extends Component {
  state = {
    books: null
  };

  async componentDidMount() {
    try {
      const respostaAPI = await getBooks();
      this.setState({
        books: respostaAPI.data
      });
    } catch (error) {
      alert('Deu ruim =/');
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.booksContainer}>
          <Grid container justify="center" spacing={24}>
            {this.state.books ? (
              this.state.books.map(book => (
                <Grid key={book.volumeInfo.title} item>
                  <BookCard book={book} />
                </Grid>
              ))
            ) : (
              <CircularProgress size={32} />
            )}
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
