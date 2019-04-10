import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.person.name}</h1>
        <h1>{this.props.person.age}</h1>
        <button onClick={this.props.mostraTexto}>Clique me</button>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Welcome;
