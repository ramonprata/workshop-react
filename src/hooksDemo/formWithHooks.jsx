import React, { Component } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import './demo.css';

class FormWithHooks extends Component {
  render() {
    return (
      <Card className="card">
        <CardHeader title="FormWithHooks" />
      </Card>
    );
  }
}

export default FormWithHooks;
