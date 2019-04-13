import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log('construtor Welcome');
    this.state = {
      demoMostrar: this.props.devoMostrar
    };
  }

  componentWillMount() {
    console.log('componentWillMount Welcome');
  }

  componentDidMount() {
    console.log('componentDidMount Welcome', this.props);
  }

  // React < 16.3
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps Welcome: ', nextProps);
  }

  // React > 16.3
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps Welcome: ');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.devoMostrar;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate Welcome ');
  }
  
  render() {
    console.log('render Welcome');
    return (
      <React.Fragment>
        {this.state.devoMostrar && (
          <div>
            <h1>Welcome component</h1>
            <button onClick={this.props.mostraComentario}>Mostra comentario</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Welcome;
