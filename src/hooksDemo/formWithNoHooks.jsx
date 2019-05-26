import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './demo.css';
import Input from './input';

class FormWithNoHooks extends Component {
  render() {
    return (
      <Card className="card">
        <CardHeader title="FormWithHooks" />
        <CardContent />
      </Card>
    );
  }
}

export default FormWithNoHooks;
