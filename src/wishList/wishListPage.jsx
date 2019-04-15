import React, { Component } from 'react';

class WishListPage extends Component {
  render() {
    console.log('this.props.match.params :', this.props);
    return (
      <div>
        <h1>WishListPage</h1>
      </div>
    );
  }
}

export default WishListPage;